import * as React from 'react'
import { EmojiStaticKeyboard } from './components/EmojiStaticKeyboard'
import { KeyboardProvider } from './contexts/KeyboardProvider'
import type { KeyboardProps } from './contexts/KeyboardContext'

type EmojiKeyboardProps = Omit<Partial<KeyboardProps>, 'open' | 'onClose'> &
  Pick<KeyboardProps, 'onEmojiSelected'>

export const EmojiKeyboard = (props: EmojiKeyboardProps) => {
  return (
    <KeyboardProvider {...props} open={true} onClose={() => {}}>
      <EmojiStaticKeyboard />
    </KeyboardProvider>
  )
}
