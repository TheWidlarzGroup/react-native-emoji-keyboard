---
sidebar_position: 8
title: Persist recently Used
---

:::info
To preview app with this example, clone [**github repo**](https://github.com/TheWidlarzGroup/rn-emoji-keyboard.git) and run `yarn example ios` or `yarn example android`.
:::

### Usage

To provide support for persistent storage of recently selected emoji, use `useRecentPicksPersistence` hook

```tsx
import { useRecentPicksPersistence } from 'rn-emoji-keyboard'
import AsyncStorage from '@react-native-async-storage/async-storage'

useRecentPicksPersistence({
  initialization: () => AsyncStorage.getItem(STORAGE_KEY).then((item) => JSON.parse(item || '[]')),
  onStateChange: (next) => AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)),
})
```
