import { Button } from 'example/src/components/Button'
import React from 'react'
import EmojiPicker, { type EmojiType, pl } from 'rn-emoji-keyboard'
import { Result } from '../../src/components/Result'

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
        translation={pl}
      />
    </>
  )
}
