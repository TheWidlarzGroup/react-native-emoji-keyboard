---
sidebar_position: 6
title: Static
---

:::info
To preview app with this example, clone [**github repo**](https://github.com/TheWidlarzGroup/rn-emoji-keyboard.git) and run `yarn example ios` or `yarn example android`.
:::

### Usage

If you need emoji picker to be a static component, you dont need to pass any additional props to it.

```jsx
import { EmojiKeyboard } from 'rn-emoji-keyboard';

const ExampleComponent = () => {
  // ...

  return <EmojiKeyboard onEmojiSelected={handleOnEmojiSelected} />
}
```

![Preview](../../../assets/img/static-preview.jpg)
