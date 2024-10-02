import * as React from 'react'
import {
  type GestureResponderEvent,
  Image,
  type StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  type ViewStyle,
} from 'react-native'
import type { EmojiSizes, JsonEmoji, UnicodeJsonEmoji } from '../types'
import { isUnicodeEmoji, isUriEmoji } from '../utils/typeguards'

type Props = {
  item: JsonEmoji
  emojiSize: number
  index: number
  onPress: (emoji: JsonEmoji) => void
  onLongPress: (emoji: UnicodeJsonEmoji, emojiIndex: number, emojiSizes: EmojiSizes) => void
  selectedEmojiStyle?: StyleProp<ViewStyle>
  isSelected?: boolean
}

export const SingleEmoji = React.memo(
  (p: Props) => {
    const handlePress = () => p.onPress(p.item)
    let handleLongPress
    if (isUnicodeEmoji(p.item)) {
      handleLongPress = (e: GestureResponderEvent) => {
        // @ts-ignore
        e.target.measure((_x, _y, width, height) => {
          p.onLongPress(p.item as UnicodeJsonEmoji, p.index, { width, height })
        })
      }
    }

    return (
      <TouchableOpacity
        onPress={handlePress}
        {...(isUnicodeEmoji(p.item) && handleLongPress && { onLongPress: handleLongPress })}
        style={styles.container}
      >
        <View pointerEvents={'none'} style={[styles.emojiWrapper, p.selectedEmojiStyle]}>
          {isUnicodeEmoji(p.item) && (
            <Text style={[styles.unicodeEmoji, { fontSize: p.emojiSize }]}>{p.item.emoji}</Text>
          )}
          {isUriEmoji(p.item) && p.item.uri && (
            <Image
              style={[styles.uriEmoji, { width: p.emojiSize, height: p.emojiSize }]}
              source={{ uri: p.item.uri }}
            />
          )}
        </View>
      </TouchableOpacity>
    )
  },
  (prevProps, nextProps) => prevProps.isSelected === nextProps.isSelected,
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiWrapper: {
    padding: 4,
  },
  unicodeEmoji: { color: '#000' },
  uriEmoji: { resizeMode: 'contain', objectFit: 'contain' },
})
