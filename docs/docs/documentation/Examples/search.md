---
sidebar_position: 10
title: Search Bar
---

:::info
To preview app with this example, clone [**github repo**](https://github.com/TheWidlarzGroup/rn-emoji-keyboard.git) and run `yarn example ios` or `yarn example android`.
:::

### Usage

If you want to reveal the search bar, used to find specific emoji, just pass `enableSearchBar` to `EmojiPicker`.

You can also choose whether to display the search bar clear icon (which appears when you type something in search input). To hide this icon, pass the `hideSearchBarClearIcon` prop to `EmojiPicker`.

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
      enableSearchBar
    />
  )
}
```

![Preview](../../../assets/img/search-bar-preview.gif)
