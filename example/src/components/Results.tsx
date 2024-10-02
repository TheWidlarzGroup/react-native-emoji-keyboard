import React from 'react'
import { StyleSheet, View } from 'react-native'
import type { EmojiType } from 'rn-emoji-keyboard'
import { Result } from './Result'

type ResultsProps = {
  emojis: EmojiType[]
}
export const Results = ({ emojis }: ResultsProps) => {
  return (
    <View>
      {emojis.map((emoji, index) => (
        <View key={index}>
          <Result emoji={emoji} />
        </View>
      ))}
    </View>
  )
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
    marginHorizontal: 16,
    marginVertical: 32,
    textAlign: 'center',
    width: 42,
    height: 42,
  },
})
