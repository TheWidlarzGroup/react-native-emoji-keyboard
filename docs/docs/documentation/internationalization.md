---
sidebar_position: 3
title: Internationalization
---

# Internationalization

### Pre-defined

Due to the limited translation possibilities, we only provide a few pre-defined translations into the following languages:

- `en` - English 🇺🇸
- `pl` - Polish 🇵🇱
- `fr` - French 🇫🇷
- `it` - Italian 🇮🇹
- `ko` - Korean 🇰🇷
- `id` - Indonesian 🇲🇨
- `es` - Spanish 🇪🇸
- `de` - German 🇩🇪
- `pt` - Portuguese 🇧🇷
- `vi` - Vietnamese 🇻🇳
- `cs` - Czech 🇨🇿
- `ja` - Japanese 🇯🇵
- `tr` - Turkish 🇹🇷
- `no` - Norwegian 🇳🇴
- `ro` - Romanian 🇷🇴
- `np` - Nepali 🇳🇵
- `se` - Swedish 🇸🇪

First import lang and use it as `translation` prop.

```ts
import { pl } from 'rn-emoji-keyboard'

// ...

translation = { pl }
```

### Customised

There is possibility to pass own translation to library with the prop called `translation` like this

```ts
translation={{
  smileys_emotion: 'Smileys & Emotion',
  people_body: 'People & Body',
  animals_nature: 'Animals & Nature',
  food_drink: 'Food & Drink',
  travel_places: 'Travel & Places',
  activities: 'Activities',
  objects: 'Objects',
  symbols: 'Symbols',
  flags: 'Flags',
}}
```

:::info
_If you have written a translation into your language, we strongly encourage you to create a Pull Request and add your language to the package, following the [**contributions section**](/docs/contributions/translations)._
:::
