import * as React from 'react'

import { StyleSheet, View, Text, FlatList } from 'react-native'
import type { EmojisByCategory, JsonEmoji } from '../types'
import { SingleEmoji } from './SingleEmoji'
import { KeyboardContext } from '../contexts/KeyboardContext'
import { useKeyboardStore } from '../store/useKeyboardStore'
import { parseEmoji } from '../utils'

const emptyEmoji: JsonEmoji = {
  emoji: '',
  name: 'blank emoji',
  v: '0',
  toneEnabled: false,
}

export const EmojiCategory = ({
  item: { title, data },
  setKeyboardScrollOffsetY,
}: {
  item: EmojisByCategory
  setKeyboardScrollOffsetY: React.Dispatch<React.SetStateAction<number>>
}) => {
  const {
    onEmojiSelected,
    emojiSize,
    numberOfColumns,
    width,
    hideHeader,
    headerStyles,
    translation,
    categoryPosition,
    clearEmojiTonesData,
    generateEmojiTones,
  } = React.useContext(KeyboardContext)

  const { setKeyboardState, keyboardState } = useKeyboardStore()

  const [empty, setEmpty] = React.useState<JsonEmoji[]>([])

  React.useEffect(() => {
    if (data.length % numberOfColumns) {
      const fillWithEmpty = new Array(numberOfColumns - (data.length % numberOfColumns)).fill(
        emptyEmoji
      )
      setEmpty(fillWithEmpty)
    }
  }, [numberOfColumns, data])

  const getItemLayout = (_: JsonEmoji[] | null | undefined, index: number) => ({
    length: emojiSize ? emojiSize : 0,
    offset: emojiSize * Math.ceil(index / numberOfColumns),
    index,
  })

  const handleEmojiPress = React.useCallback(
    (emoji: JsonEmoji) => {
      if (emoji.name === 'blank emoji') return
      const parsedEmoji = parseEmoji(emoji)
      onEmojiSelected(parsedEmoji)
      setKeyboardState({ type: 'RECENT_EMOJI_ADD', payload: emoji })
    },
    [onEmojiSelected, setKeyboardState]
  )

  const renderItem = React.useCallback(
    (props) => {
      const handleLongPress = () => {
        clearEmojiTonesData()
        generateEmojiTones(props.item, props.index)
      }

      const recentlyUsed = keyboardState?.recentlyUsed || []
      const recentlyUsedEmoji = recentlyUsed?.find((emoji) => emoji.name === props.item.name)

      return (
        <SingleEmoji
          {...props}
          item={recentlyUsedEmoji || props.item}
          onPress={() => handleEmojiPress(props.item)}
          emojiSize={emojiSize}
          onLongPress={handleLongPress}
        />
      )
    },
    [
      keyboardState?.recentlyUsed,
      emojiSize,
      clearEmojiTonesData,
      generateEmojiTones,
      handleEmojiPress,
    ]
  )

  const handleOnScroll = (ev: { nativeEvent: { contentOffset: { y: number } } }) => {
    setKeyboardScrollOffsetY(ev.nativeEvent.contentOffset.y)
    clearEmojiTonesData()
  }

  return (
    <View style={[styles.container, { width: width }]}>
      {!hideHeader && <Text style={[styles.sectionTitle, headerStyles]}>{translation[title]}</Text>}
      <FlatList
        data={[...data, ...empty]}
        keyExtractor={(emoji) => emoji.name}
        numColumns={numberOfColumns}
        renderItem={renderItem}
        removeClippedSubviews={true}
        getItemLayout={getItemLayout}
        onScroll={handleOnScroll}
        ListFooterComponent={() => (
          <View style={categoryPosition === 'floating' ? styles.footerFloating : styles.footer} />
        )}
        windowSize={20}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 6,
  },
  sectionTitle: {
    opacity: 0.6,
    marginTop: 12,
    marginBottom: 6,
    marginLeft: 12,
  },
  footer: { height: 8 },
  footerFloating: { height: 70 },
})
