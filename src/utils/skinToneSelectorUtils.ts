import { TONES_CONTAINER_WIDTH } from '../components/SkinTones'

const EMOJI_PADDING = 8
const KEYBOARD_PADDING = 10
const FUNNEL_HEIGHT = 7

const sumOfPaddings = KEYBOARD_PADDING + EMOJI_PADDING

export const generateToneSelectorPosition = (
  numOfColumns: number,
  emojiIndex: number,
  windowWidth: number,
  emojiWidth: number,
  emojiHeight: number,
  extraSearchTop: number,
) => {
  // get column in the center to measure tone selector x position
  const halfOfColumns = numOfColumns / 2
  const centerColumn = Number.isInteger(halfOfColumns)
    ? halfOfColumns - 1
    : Math.floor(halfOfColumns)

  // emoji index in singleRow perspective based on emojiIndex in flatlist and numberOfColumns
  const emojiIndexInRow = emojiIndex % numOfColumns

  // maximum x at which tone selector is fully visible on the screen
  const maxXPosition = windowWidth - TONES_CONTAINER_WIDTH - sumOfPaddings * 2

  // different x position for emojis before and after center column
  const x = emojiIndexInRow < centerColumn ? emojiIndexInRow * emojiWidth : maxXPosition

  // current row number
  const rowNumber = emojiIndex / numOfColumns >= 1 ? Math.floor(emojiIndex / numOfColumns) : 0

  // tone selector y based on emoji size and search input on the top
  const y = rowNumber * emojiHeight + extraSearchTop - FUNNEL_HEIGHT

  const position = {
    x: emojiIndexInRow === 0 ? sumOfPaddings : x + sumOfPaddings,
    y,
  }

  return position
}

export const generateToneSelectorFunnelPosition = (
  numOfColumns: number,
  emojiIndex: number,
  emojiWidth: number,
) => {
  const emojiIndexInRow = emojiIndex % numOfColumns

  const funnelXPosition =
    emojiIndexInRow === 0 ? sumOfPaddings : emojiIndexInRow * emojiWidth + sumOfPaddings

  return funnelXPosition
}

export const insertAtCertainIndex = (arr: string[], index: number, newItem: string) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
]

export const zeroWidthJoiner = String.fromCodePoint(0x200d)
export const variantSelector = String.fromCodePoint(0xfe0f)

export const skinToneCodes = [
  String.fromCodePoint(0x1f3fb),
  String.fromCodePoint(0x1f3fc),
  String.fromCodePoint(0x1f3fe),
  String.fromCodePoint(0x1f3fd),
  String.fromCodePoint(0x1f3ff),
]

export const removeSkinToneModifier = (emoji: string) => {
  let emojiCopy = emoji
  for (let i = 0; i < skinToneCodes.length; i++) {
    const skinTone = skinToneCodes[i]

    emojiCopy = skinTone ? emojiCopy.replace(skinTone, '') : emojiCopy
  }
  return emojiCopy
}

export const skinTones = [
  {
    name: 'light_skin_tone',
    color: '🏻',
  },
  {
    name: 'medium_light_skin_tone',
    color: '🏼',
  },
  {
    name: 'medium_skin_tone',
    color: '🏽',
  },
  {
    name: 'medium_dark_skin_tone',
    color: '🏾',
  },
  {
    name: 'dark_skin_tone',
    color: '🏿',
  },
]
