---
sidebar_position: 6
title: Emojis Data
---

The library provides the ability to import a `.json` file containing all currently available emojis. Additionally, you can pass your own set of emojis, provided they follow our structure and types.

To import the emojis data, use the following code:

```ts
import { emojisByCategory } from 'rn-emoji-keyboard'
```

Here is the EmojisData structure explained as Typescript code

```ts

export type EmojiTypeBase = {
  name: string
  slug: string
  alreadySelected?: boolean
}

export type UnicodeEmojiType = EmojiTypeBase & {
  emoji: string // Visual representation of emoji
  toneEnabled: boolean
  unicode_version: string
}

export type UriEmojiType = EmojiTypeBase & {
  uri: string // Distant URI / base64 / Image.resolveAssetSource(require('asset/path/emote.ext').uri
}

export type EmojiType = UnicodeEmojiType | UriEmojiType

type EmojisByCategory = {
  title: CategoryTypes
  data: JsonEmoji[]
}

const emojisByCategory: EmojisByCategory[]
```
