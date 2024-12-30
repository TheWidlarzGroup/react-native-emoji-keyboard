import * as React from 'react'

import { StyleSheet, View, Text, FlatList, type ListRenderItemInfo } from 'react-native'
import {
  CATEGORIES,
  type CategoryPosition,
  type EmojisByCategory,
  type EmojiSizes,
  type JsonEmoji,
} from '../types'
import { SingleEmoji } from './SingleEmoji'
import { KeyboardContext } from '../contexts/KeyboardContext'
import { useKeyboardStore } from '../store/useKeyboardStore'
import { parseEmoji } from '../utils/parseEmoji'
import { removeSkinToneModifier } from '../utils/skinToneSelectorUtils'
import { useKeyboard } from '../hooks/useKeyboard'
import { InteractionManager } from 'react-native'

const emptyEmoji: JsonEmoji = {
  emoji: '',
  name: 'blank emoji',
  v: '0',
  toneEnabled: false,
}

const ListFooterComponent = ({ categoryPosition }: { categoryPosition: CategoryPosition }) => (
  <View style={categoryPosition === 'floating' ? styles.footerFloating : styles.footer} />
)

export const EmojiCategory = React.memo(
  ({
    item: { title, data },
    setKeyboardScrollOffsetY,
    activeCategoryIndex,
  }: {
    item: EmojisByCategory
    setKeyboardScrollOffsetY: React.Dispatch<React.SetStateAction<number>>
    activeCategoryIndex: number
  }) => {
    const {
      onEmojiSelected,
      emojiSize,
      numberOfColumns,
      width,
      hideHeader,
      translation,
      categoryPosition,
      clearEmojiTonesData,
      generateEmojiTones,
      theme,
      styles: themeStyles,
      selectedEmojis,
      minimalEmojisAmountToDisplay,
    } = React.useContext(KeyboardContext)

    const { keyboardHeight } = useKeyboard(true)

    const contentContainerStyle = { paddingBottom: keyboardHeight }

    const { setKeyboardState, keyboardState } = useKeyboardStore()

    const [empty, setEmpty] = React.useState<JsonEmoji[]>([])

    React.useEffect(() => {
      if (data.length % numberOfColumns) {
        const fillWithEmpty = new Array(numberOfColumns - (data.length % numberOfColumns)).fill(
          emptyEmoji,
        )
        setEmpty(fillWithEmpty)
      }
    }, [numberOfColumns, data])

    const handleEmojiPress = React.useCallback(
      (emoji: JsonEmoji) => {
        if (emoji.name === 'blank emoji') return
        clearEmojiTonesData()
        const parsedEmoji = parseEmoji(emoji)
        setKeyboardState({ type: 'RECENT_EMOJI_ADD', payload: emoji })
        if (Array.isArray(selectedEmojis))
          return onEmojiSelected({
            ...parsedEmoji,
            alreadySelected: selectedEmojis.includes(emoji.name),
          })
        onEmojiSelected(parsedEmoji)
      },
      [selectedEmojis, onEmojiSelected, setKeyboardState, clearEmojiTonesData],
    )

    const handleEmojiLongPress = React.useCallback(
      (emoji: JsonEmoji, emojiIndex: number, emojiSizes: EmojiSizes) => {
        clearEmojiTonesData()

        const emojiWithoutTone = {
          ...emoji,
          emoji: removeSkinToneModifier(emoji.emoji),
        }

        generateEmojiTones(emojiWithoutTone, emojiIndex, emojiSizes)
      },
      [clearEmojiTonesData, generateEmojiTones],
    )

    const renderItem = React.useCallback(
      (props: ListRenderItemInfo<JsonEmoji>) => {
        const recentlyUsed = keyboardState?.recentlyUsed || []
        const recentlyUsedEmoji = recentlyUsed?.find((emoji) => emoji.name === props.item.name)

        const isSelected = selectedEmojis && selectedEmojis.includes(props.item.name)

        return (
          <SingleEmoji
            {...props}
            isSelected={isSelected}
            item={recentlyUsedEmoji || props.item}
            emojiSize={emojiSize}
            onPress={handleEmojiPress}
            onLongPress={handleEmojiLongPress}
            themeStyles={themeStyles}
            selectedEmojiStyle={
              isSelected
                ? [
                    styles.selectedEmoji,
                    { backgroundColor: theme.emoji.selected },
                    themeStyles.emoji.selected,
                  ]
                : {}
            }
          />
        )
      },
      [
        keyboardState?.recentlyUsed,
        selectedEmojis,
        emojiSize,
        handleEmojiPress,
        handleEmojiLongPress,
        theme.emoji.selected,
        themeStyles,
      ],
    )

    const handleOnScroll = (ev: { nativeEvent: { contentOffset: { y: number } } }) => {
      setKeyboardScrollOffsetY(ev.nativeEvent.contentOffset.y)
      clearEmojiTonesData()
    }

    const keyExtractor = React.useCallback((item: JsonEmoji) => item.name, [])

    const [maxIndex, setMaxIndex] = React.useState(0)

    // with InteractionManager we can show emojis after interaction is finished
    // It helps with delay during category change animation
    InteractionManager.runAfterInteractions(() => {
      if (maxIndex === 0 && data.length) {
        setMaxIndex(minimalEmojisAmountToDisplay)
      }
    })

    const onEndReached = () => {
      if (maxIndex <= data.length) {
        setMaxIndex(data.length)
      }
    }

    React.useEffect(() => {
      if (CATEGORIES[activeCategoryIndex] !== title) {
        setMaxIndex(0)
      }
    }, [activeCategoryIndex, title])

    const flatListData = data.slice(0, maxIndex)

    return (
      <View style={[styles.container, { width }]}>
        {!hideHeader && (
          <Text style={[styles.sectionTitle, themeStyles.header, { color: theme.header }]}>
            {translation[title]}
          </Text>
        )}
        {flatListData.length === 0 ? null : (
          <FlatList
            data={[...flatListData, ...empty]}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.3}
            keyExtractor={keyExtractor}
            numColumns={numberOfColumns}
            renderItem={renderItem}
            onScroll={handleOnScroll}
            ListFooterComponent={<ListFooterComponent categoryPosition={categoryPosition} />}
            initialNumToRender={10}
            windowSize={16}
            maxToRenderPerBatch={5}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={contentContainerStyle}
            scrollEventThrottle={16}
          />
        )}
      </View>
    )
  },
  (prevProps, nextProps) => {
    if (prevProps.activeCategoryIndex !== nextProps.activeCategoryIndex) return false
    if (nextProps.item.title !== 'search') return true

    if (prevProps.item.data.length !== nextProps.item.data.length) return false

    return (
      prevProps.item.data.map((d) => d.name).join() ===
      nextProps.item.data.map((d) => d.name).join()
    )
  },
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 6,
  },
  sectionTitle: {
    marginTop: 12,
    marginBottom: 6,
    marginLeft: 12,
  },
  footer: { height: 8 },
  footerFloating: { height: 70 },
  selectedEmoji: { borderRadius: 25 },
})
