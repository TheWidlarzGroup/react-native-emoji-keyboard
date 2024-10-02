---
sidebar_position: 4
title: Disabled Categories
---

:::info
To preview app with this example, clone [**github repo**](https://github.com/TheWidlarzGroup/rn-emoji-keyboard.git) and run `yarn example ios` or `yarn example android`.
:::

### Usage

If you want to disable specific categories use the `disabledCategories` props. It's a simple, pass to it an array with names of categories that you want to disable. For more information about avaible props check [**API Reference section**](/docs/api/modal).

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
      disabledCategories={['activities', 'flags', 'objects', 'symbols']}
    />
  )
}
```

![Preview](../../../assets/img/categories-preview.jpg)
