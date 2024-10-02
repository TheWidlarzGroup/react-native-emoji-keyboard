import React from 'react'
import { EmojiKeyboard, type EmojiType } from 'rn-emoji-keyboard'
import { Result } from 'example/src/components/Result'

export default function () {
  const [result, setResult] = React.useState<EmojiType>()

  const handlePick = (emoji: EmojiType) => {
    console.log(emoji)
    setResult(emoji)
  }
  return (
    <>
      {result && <Result emoji={result} />}

      <EmojiKeyboard onEmojiSelected={handlePick} />
    </>
  )
}
