import * as React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { KeyboardContext } from '../contexts/KeyboardContext'
import { useKeyboardStore } from '../store/useKeyboardStore'
import { parseEmoji } from '../utils/parseEmoji'
import type { JsonEmoji } from '../types'
import { SingleSkinTone } from './SingleSkinTone'
import { Funnel } from '../assets/funnel'

type Props = {
  keyboardScrollOffsetY: number
}

export const TONES_CONTAINER_WIDTH = 226
const TONES_CONTAINER_HEIGHT = 48

const Separator = () => <View style={styles.separator} />

export const SkinTones = ({ keyboardScrollOffsetY }: Props) => {
  const { onEmojiSelected, emojiTonesData, theme } = React.useContext(KeyboardContext)

  const { setKeyboardState } = useKeyboardStore()

  const handleEmojiPress = React.useCallback(
    (emoji: JsonEmoji) => {
      if (emoji.name === 'blank emoji') return
      const parsedEmoji = parseEmoji(emoji)
      onEmojiSelected(parsedEmoji)
      setKeyboardState({ type: 'RECENT_EMOJI_ADD', payload: emoji })
    },
    [onEmojiSelected, setKeyboardState],
  )

  const renderItem = React.useCallback(
    (props) => {
      return (
        <SingleSkinTone {...props} onPress={() => handleEmojiPress(props.item)} emojiSize={32} />
      )
    },
    [handleEmojiPress],
  )

  const posX = emojiTonesData?.position?.x || 0

  const posY = !emojiTonesData?.position?.y
    ? 0
    : emojiTonesData?.position?.y - keyboardScrollOffsetY

  const funnelXPosition = emojiTonesData?.funnelXPosition || 0

  if (!emojiTonesData?.emojis?.length) return null
  return (
    <>
      <View
        style={[
          styles.floating,
          { left: posX, top: posY, backgroundColor: theme.skinTonesContainer },
        ]}
      >
        <View>
          <FlatList
            data={emojiTonesData.emojis}
            keyExtractor={(emoji) => emoji.index}
            renderItem={renderItem}
            ItemSeparatorComponent={Separator}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponentStyle={styles.activeIndicatorContainer}
            horizontal
          />
        </View>
      </View>
      <View
        style={[
          styles.funnelContainer,
          {
            left: funnelXPosition + 14,
            top: posY + TONES_CONTAINER_HEIGHT - 1,
          },
        ]}
      >
        <Funnel fill={theme.skinTonesContainer} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  floating: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 226,
    height: TONES_CONTAINER_HEIGHT,
    borderRadius: 8,
  },
  funnelContainer: {
    position: 'absolute',
  },
  separator: {
    width: 1,
    height: 38,
    backgroundColor: '#00000011',
    marginHorizontal: 4,
    marginVertical: 5,
  },
  activeIndicatorContainer: {
    position: 'absolute',
    width: 28,
    height: 28,
  },
})
