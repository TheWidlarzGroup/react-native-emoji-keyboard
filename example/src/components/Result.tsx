import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import type { EmojiType } from 'rn-emoji-keyboard'
import { isUnicodeEmojiType } from '../../../src/utils/typeguards'

type ResultProps = {
  emoji: EmojiType
}
export const Result = ({ emoji }: ResultProps) => {
  if (isUnicodeEmojiType(emoji)) {
    return <Text style={styles.unicode}>{emoji.emoji || ' '}</Text>
  } else {
    return <Image style={styles.uri} source={{ uri: emoji.uri }} />
  }
}

export const styles = StyleSheet.create({
  unicode: {
    marginHorizontal: 16,
    marginVertical: 32,
    textAlign: 'center',
    fontSize: 42,
    color: '#000',
  },
  uri: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
    objectFit: 'contain',
  },
})
