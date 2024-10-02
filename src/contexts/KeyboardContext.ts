import * as React from 'react'
import type { TextStyle, ViewStyle } from 'react-native'
import en from '../translation/en'
import type {
  CategoryTranslation,
  EmojiType,
  CategoryTypes,
  CategoryPosition,
  EmojisByCategory,
  JsonEmoji,
  EmojiTonesData,
  EmojiSizes,
} from '../types'
import { CATEGORIES } from '../types'
import type { RecursivePartial } from '../utils/deepMerge'
import emojisByCategory from '../assets/emojis.json'

export type OnEmojiSelected = (emoji: EmojiType) => void

export type Styles = {
  container: ViewStyle
  header: TextStyle
  knob: ViewStyle
  category: {
    container: ViewStyle
    icon: TextStyle
  }
  searchBar: {
    container: ViewStyle
    text: TextStyle
  }
  emoji: {
    selected: ViewStyle
  }
}

export type Theme = {
  backdrop: string
  knob: string
  container: string
  header: string
  skinTonesContainer: string
  category: {
    icon: string
    iconActive: string
    container: string
    containerActive: string
  }
  search: {
    background: string
    text: string
    placeholder: string
    icon: string
  }
  customButton: {
    icon: string
    iconPressed: string
    background: string
    backgroundPressed: string
  }
  emoji: {
    selected: string
  }
}

export type KeyboardProps = {
  open: boolean
  onClose: () => void
  onEmojiSelected: OnEmojiSelected
  emojiSize?: number
  expandable?: boolean
  hideHeader?: boolean
  defaultHeight?: number | string
  expandedHeight?: number | string
  onCategoryChangeFailed?: (info: {
    index: number
    highestMeasuredFrameIndex: number
    averageItemLength: number
  }) => void
  translation?: CategoryTranslation
  disabledCategories?: CategoryTypes[]
  enableRecentlyUsed?: boolean
  categoryPosition?: CategoryPosition
  enableSearchBar?: boolean
  hideSearchBarClearIcon?: boolean
  customButtons?: React.ReactNode
  categoryOrder?: CategoryTypes[]
  onRequestClose?: () => void
  disableSafeArea?: boolean
  allowMultipleSelections?: boolean
  theme?: RecursivePartial<Theme>
  styles?: RecursivePartial<Styles>
  enableSearchAnimation?: boolean
  enableCategoryChangeAnimation?: boolean
  selectedEmojis?: string[] | false
  enableCategoryChangeGesture?: boolean
  emojisByCategory?: EmojisByCategory[]
}
export type ContextValues = {
  activeCategoryIndex: number
  setActiveCategoryIndex: (index: number) => void
  numberOfColumns: number
  width: number
  setWidth: (width: number) => void
  searchPhrase: string
  setSearchPhrase: (phrase: string) => void
  renderList: EmojisByCategory[]
  isToneSelectorOpened: boolean
  clearEmojiTonesData: () => void
  generateEmojiTones: (emoji: JsonEmoji, emojiIndex: number, emojiSizes: EmojiSizes) => void
  emojiTonesData: EmojiTonesData
  shouldAnimateScroll: boolean
  setShouldAnimateScroll: (value: boolean) => void
  minimalEmojisAmountToDisplay: number
}

export const emptyStyles: Styles = {
  container: {},
  header: {},
  category: {
    icon: {},
    container: {},
  },
  searchBar: {
    container: {},
    text: {},
  },
  knob: {},
  emoji: {
    selected: {},
  },
}
export const defaultTheme: Theme = {
  backdrop: '#00000055',
  knob: '#ffffff',
  container: '#ffffff',
  header: '#00000099',
  skinTonesContainer: '#e3dbcd',
  category: {
    icon: '#000000',
    iconActive: '#005b96',
    container: '#e3dbcd',
    containerActive: '#ffffff',
  },
  search: {
    text: '#000000cc',
    placeholder: '#00000055',
    icon: '#00000055',
    background: '#00000011',
  },
  customButton: {
    icon: '#000000',
    iconPressed: '#005b96',
    background: '#00000011',
    backgroundPressed: '#00000016',
  },
  emoji: {
    selected: '#e3dbcd',
  },
}

export const defaultKeyboardContext: Required<KeyboardProps> & {
  theme: Theme
  styles: Styles
} = {
  open: false,
  onClose: () => {},
  onEmojiSelected: (_emoji: EmojiType) => {},
  emojiSize: 28,
  expandable: true,
  hideHeader: false,
  defaultHeight: '40%',
  expandedHeight: '80%',
  onCategoryChangeFailed: (info) => console.warn(info),
  translation: en,
  disabledCategories: [],
  enableRecentlyUsed: false,
  categoryPosition: 'floating',
  enableSearchBar: false,
  hideSearchBarClearIcon: false,
  customButtons: null,
  categoryOrder: [...CATEGORIES],
  onRequestClose: () => {},
  disableSafeArea: false,
  allowMultipleSelections: false,
  theme: defaultTheme,
  styles: emptyStyles,
  enableSearchAnimation: true,
  enableCategoryChangeAnimation: true,
  selectedEmojis: false,
  enableCategoryChangeGesture: true,
  emojisByCategory: emojisByCategory as EmojisByCategory[],
}

export const defaultKeyboardValues: ContextValues = {
  activeCategoryIndex: 0,
  setActiveCategoryIndex: () => {},
  numberOfColumns: 5,
  width: 0,
  setWidth: (_width: number) => {},
  searchPhrase: '',
  setSearchPhrase: (_phrase: string) => {},
  renderList: [],
  isToneSelectorOpened: false,
  clearEmojiTonesData: () => {},
  generateEmojiTones: (_emoji) => {},
  emojiTonesData: {
    emojis: [],
    position: {
      x: 0,
      y: 0,
    },
    funnelXPosition: 0,
  },
  shouldAnimateScroll: true,
  setShouldAnimateScroll: (_value: boolean) => {},
  minimalEmojisAmountToDisplay: 50,
}

export const KeyboardContext = React.createContext<
  Required<KeyboardProps> & ContextValues & { theme: Theme; styles: Styles }
>({
  ...defaultKeyboardContext,
  ...defaultKeyboardValues,
})
