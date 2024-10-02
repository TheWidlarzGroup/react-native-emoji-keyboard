<p align="center">
    <img alt="rn-emoji-keyboard" src="./docs/assets/icon/rocket.png" />
</p>
<p align="center" >
  Lightweight, fully customizable emoji keyboard,<br />
  written as a React Native component (without native elements).<br />
  Designated to be user and developer friendly! 💖 <br/>
  <a href="https://github.com/TheWidlarzGroup/rn-emoji-keyboard">rn-emoji-keyboard</a>
</p>

---

![Build status - typescript compile](https://img.shields.io/github/actions/workflow/status/TheWidlarzGroup/rn-emoji-keyboard/tsc.yml?branch=master)
![License badge](https://img.shields.io/npm/l/rn-emoji-keyboard)
![Latest, released version](https://img.shields.io/github/v/release/TheWidlarzGroup/rn-emoji-keyboard)
![Date of latest commit](https://img.shields.io/github/last-commit/TheWidlarzGroup/rn-emoji-keyboard)
![Number of contributors](https://img.shields.io/github/contributors/TheWidlarzGroup/rn-emoji-keyboard)

---

## 🪄 Installation

```sh
yarn add rn-emoji-keyboard
```

## 📖 Documentation

Check the docs here [Click](https://thewidlarzgroup.github.io/rn-emoji-keyboard/)

- [Getting Started](https://thewidlarzgroup.github.io/rn-emoji-keyboard/docs/documentation/start)
- [Internationalization](https://thewidlarzgroup.github.io/rn-emoji-keyboard/docs/documentation/internationalization)
- [Basic Usage](https://thewidlarzgroup.github.io/rn-emoji-keyboard/docs/documentation/Examples/basic)
- [API Reference](https://thewidlarzgroup.github.io/rn-emoji-keyboard/docs/api/modal)
- [Contributions](https://thewidlarzgroup.github.io/rn-emoji-keyboard/docs/contributions/translations)

## ⚡️ Example

![Preview](/example/assets/preview-small.gif)

```js
import EmojiPicker from 'rn-emoji-keyboard'

export default function App() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return <EmojiPicker onEmojiSelected={handlePick} open={isOpen} onClose={() => setIsOpen(false)} />
}
```

## ⚖️ License

**[MIT](/LICENSE)**

## 📝 Contribute

If you want to contribute read the [CONTRIBUTING.md](/CONTRIBUTING.md) guide.

## 🏢 Built with ♥️ and ⌨️ at TheWidlarzGroup

Built at TheWidlarzGroup - the group of React Native Developers and Designers who has built this project for you.
If you like it -> give it a star!

E-mail if you have any questions or just want to talk <hello@thewidlarzgroup.com>
