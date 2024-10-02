---
sidebar_position: 2
title: Static Mode
---

# Static Mode

The library gives you the possibility to choose from two modes: modal or static. This section refers to the static mode (for modal mode, see: [modal section](/docs/api/modal))

To apply the static mode in your app, use a named import from `rn-emoji-keyboard`

```ts
import { EmojiKeyboard } from 'rn-emoji-keyboard'
```

For props, please refer to the modal mode section.

:::info
The static mode has the same properties as the modal mode. The main difference is that props responsible for modal behaviour are disabled here. Therefore, you cannot use following:

- `open`
- `onClose`

:::
