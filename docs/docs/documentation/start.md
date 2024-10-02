---
sidebar_position: 2
title: Getting Started
---

# Getting Started

RN Emoji Keyboard is a lightweight, fully customizable emoji picker, written as React Native component (without native elements). This section will help you install RN Emoji Keyboard in your app.

## Installation

```sh
yarn add rn-emoji-keyboard
```

or

```sh
npm install rn-emoji-keyboard
```

## Usage

```js
import EmojiPicker, { type EmojiType } from 'rn-emoji-keyboard'

export default function App() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const handlePick = (emojiObject: EmojiType) => {
    console.log(emojiObject)
    /* example emojiObject = {
        "emoji": "❤️",
        "name": "red heart",
        "slug": "red_heart",
        "unicode_version": "0.6",
      }
    */
  }

  return <EmojiPicker onEmojiSelected={handlePick} open={isOpen} onClose={() => setIsOpen(false)} />
}
```
