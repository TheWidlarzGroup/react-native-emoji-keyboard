---
sidebar_position: 5
title: Static Modal
---

<!-- without knob -->

:::info
To preview app with this example, clone [**github repo**](https://github.com/TheWidlarzGroup/rn-emoji-keyboard.git) and run `yarn example ios` or `yarn example android`.
:::

### Usage

If you need emoji picker to be not expandable (without knob), nothing easier. Use `expandable` props and set it to `false`. Thats all.

```jsx
import EmojiPicker from 'rn-emoji-keyboard'

const ExampleComponent = () => {
  // ...

  return (
    <EmojiPicker
      open={isOpen}
      onClose={handleOnClose}
      onEmojiSelected={handleOnEmojiSelected}
      //  add props below
      expandable={false}
    />
  )
}
```

![Preview](../../../assets/img/static-modal-preview.jpg)
