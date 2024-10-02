import { Button } from 'example/src/components/Button'
import React from 'react'
import EmojiPicker, {
  emojisByCategory,
  type EmojisByCategory,
  type EmojiType,
} from 'rn-emoji-keyboard'
import { Result } from '../../src/components/Result'
import { Image } from 'react-native'
import { isUnicodeEmoji } from '../../../src/utils/typeguards'

const getCustomEmojis = () => {
  const newEmojiSet: EmojisByCategory[] = []

  for (const [, value] of Object.entries(emojisByCategory)) {
    const newData = value.data.filter(
      (emoji) => isUnicodeEmoji(emoji) && parseFloat(emoji.v) === 11,
    )
    newEmojiSet.push({
      title: value.title,
      data: newData,
    })
  }

  const customCategoryIndex = emojisByCategory.findIndex(({ title }) => title === 'custom')
  newEmojiSet[customCategoryIndex]!.data = [
    {
      uri: Image.resolveAssetSource(require('example/assets/custom/shhhh.webp')).uri,
      keywords: ['shhhh', 'face'],
      name: 'shhhh',
    },
    {
      uri: Image.resolveAssetSource(require('example/assets/custom/silly.webp')).uri,
      keywords: ['silly', 'face'],
      name: 'silly',
    },
    {
      uri: Image.resolveAssetSource(require('example/assets/custom/woah.webp')).uri,
      keywords: ['woaah', 'face'],
      name: 'woaah',
    },
  ]
  return newEmojiSet
}

export default function () {
  const [result, setResult] = React.useState<EmojiType>()
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

  const handlePick = (emoji: EmojiType) => {
    console.log(emoji)
    setResult(emoji)
    setIsModalOpen((prev) => !prev)
  }
  return (
    <>
      {result && <Result emoji={result} />}
      <Button onPress={() => setIsModalOpen(true)} label="Open" />

      <EmojiPicker
        onEmojiSelected={handlePick}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        emojisByCategory={getCustomEmojis()}
      />
    </>
  )
}
