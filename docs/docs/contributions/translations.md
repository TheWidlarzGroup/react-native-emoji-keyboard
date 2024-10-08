---
sidebar_position: 1
title: Translations
---

# Translations

### How to Add Translations

We highly encourage you to add new translations. Please follow the steps below:

- Create language file in `/src/translation/` directory. _For example `en.ts`_
- Create a translation object following the same format like in other files
  - _please make sure to change object name per your language_

```ts
export const en: CategoryTranslation = {
  recently_used: 'Recently used',
  smileys_emotion: 'Smileys & Emotion',
  people_body: 'People & Body',
  animals_nature: 'Animals & Nature',
  food_drink: 'Food & Drink',
  travel_places: 'Travel & Places',
  activities: 'Activities',
  objects: 'Objects',
  symbols: 'Symbols',
  flags: 'Flags',
  search: 'Search',
}
export default en
```

- Import and export your translation file in `/src/index.tsx` file.

- Add info about a new language to documentation.
