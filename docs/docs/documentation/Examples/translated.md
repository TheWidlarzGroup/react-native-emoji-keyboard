---
sidebar_position: 3
title: Translated
---

:::info
To preview app with this example, clone [**github repo**](https://github.com/TheWidlarzGroup/rn-emoji-keyboard.git) and run `yarn example ios` or `yarn example android`.
:::

:::tip
If you want to add custom translation or want to get more information about translations check [**internationalization section**](/docs/documentation/internationalization).
:::

### Usage

To add translation just import specific language slug and add it to translation props.

```jsx
import EmojiPicker, { pl } from 'rn-emoji-keyboard'

const ExampleComponent = () => {
  // ...

  return (
    <EmojiPicker
      open={isOpen}
      onClose={handleOnClose}
      onEmojiSelected={handleOnEmojiSelected}
      //  add props below
      translation={pl}
    />
  )
}
```

![Preview](../../../assets/img/translated-preview.jpg)
