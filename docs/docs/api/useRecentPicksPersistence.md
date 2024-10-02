---
sidebar_position: 3
title: useRecentPicksPersistence
---

import { TitleWithRequiredBadge } from '../../src/components/TitleWithRequiredBadge/TitleWithRequiredBadge.js'

The library gives you the possibility to persists recent emoji picks by your own.
This mean that you can use for that reason whatever you want.

Async storage? - sure. Backend as store - no problem.
Choose how you want to handle it, we only require a Promise

```tsx
import { useRecentPicksPersistence } from 'rn-emoji-keyboard'
```

:::info
This functionality requires to enable `enableRecentlyUsed` in your emoji keyboard component
:::

:::info
This hook will have impact on every rn-emoji-keyboard instance used in app that have enabled recent picks.
:::

:::tip
To ensure smooth experience we recommend that you use it as high as possible in the React structure. eg. App.tsx file
:::

## Required

### <TitleWithRequiredBadge>`initialization`</TitleWithRequiredBadge>

This property is used at the very beginning to restore previous state.

### <TitleWithRequiredBadge>`onStateChange`</TitleWithRequiredBadge>

This property is used every time when user selects emoji and keyboard has enabled `enableRecentlyUsed` props
