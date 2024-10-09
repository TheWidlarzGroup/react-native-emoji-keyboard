import { Button } from 'example/src/components/Button'
import { Results } from 'example/src/components/Results'
import React from 'react'
import EmojiPicker, { type EmojiType } from 'rn-emoji-keyboard'

export default function () {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  const [currentlySelected, setCurrentlySelected] = React.useState<EmojiType[]>([])

  const handlePick = (emoji: EmojiType) => {
    console.log(emoji)
    if (emoji.alreadySelected)
      setCurrentlySelected((prev) => prev.filter((a) => a.name !== emoji.name))
    else {
      setCurrentlySelected((prev) => {
        return [...prev, emoji]
      })
    }
  }

  const currSelectedNames = currentlySelected.map((a) => a.name)
  return (
    <>
      {currentlySelected?.length && <Results emojis={currentlySelected} />}
      <Button onPress={() => setIsModalOpen(true)} label="Open" />

      <EmojiPicker
        onEmojiSelected={handlePick}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedEmojis={currSelectedNames}
        allowMultipleSelections
      />
    </>
  )
}
