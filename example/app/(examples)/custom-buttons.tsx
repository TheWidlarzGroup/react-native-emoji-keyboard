import { Button } from 'example/src/components/Button'
import React from 'react'
import EmojiPicker, { type EmojiType } from 'rn-emoji-keyboard'
import { DeleteButton } from '../../../src/components/DeleteButton'
import { Results } from '../../src/components/Results'

export default function () {
  const [results, setResults] = React.useState<EmojiType[]>([])
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

  const handlePick = (emoji: EmojiType) => {
    console.log(emoji)
    setResults([...results, emoji])
    setIsModalOpen((prev) => !prev)
  }

  const deleteLastEmoji = () => {
    if (results?.length) {
      let arrayFromString = Array.from(results)
      arrayFromString.pop()
      setResults(arrayFromString)
    }
  }

  return (
    <>
      {results?.length && <Results emojis={results} />}
      <Button onPress={() => setIsModalOpen(true)} label="Open" />

      <EmojiPicker
        onEmojiSelected={handlePick}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        enableSearchBar
        customButtons={[
          <DeleteButton
            key="deleteButton"
            onPress={deleteLastEmoji}
            style={({ pressed }) => ({
              backgroundColor: pressed ? '#000' : '#e1e1e1',
              padding: 10,
              borderRadius: 100,
            })}
            iconNormalColor="#000"
            iconActiveColor="#fff"
          />,
        ]}
        allowMultipleSelections
        categoryPosition="top"
      />
    </>
  )
}
