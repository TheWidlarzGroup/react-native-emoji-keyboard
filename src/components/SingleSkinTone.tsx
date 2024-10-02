import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import type { UnicodeJsonEmoji } from '../types'

export class SingleSkinTone extends React.Component<{
  item: UnicodeJsonEmoji
  onPress: () => void
  emojiSize: number
  onLongPress: () => void
}> {
  shouldComponentUpdate() {
    return false
  }
  render() {
    const { item, emojiSize, onPress } = this.props

    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.iconContainer}>
          <Text style={[styles.emoji, { fontSize: emojiSize }]}>{item.emoji}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 0, justifyContent: 'center' },
  iconContainer: { justifyContent: 'center', alignItems: 'center' },
  emoji: { color: '#000' },
})
