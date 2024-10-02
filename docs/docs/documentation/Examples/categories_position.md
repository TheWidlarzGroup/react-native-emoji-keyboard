---
sidebar_position: 9
title: Categories Position
---

:::info
To preview app with this example, clone [**github repo**](https://github.com/TheWidlarzGroup/rn-emoji-keyboard.git) and run `yarn example ios` or `yarn example android`.
:::

If you want to change the position of a picker, just use `categoryPosition` props with the appropriate value.
For more information about avaible props check [**API Reference section**](/docs/api/modal).

### Top

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
      categoryPosition="top"
    />
  )
}
```

![Preview](../../../assets/img/categories-top-preview.jpg)

### Bottom

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
      categoryPosition="bottom"
    />
  )
}
```

![Preview](../../../assets/img/categories-bottom-preview.jpg)
