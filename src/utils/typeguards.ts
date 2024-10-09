import type {
  EmojiType,
  JsonEmoji,
  UnicodeEmojiType,
  UnicodeJsonEmoji,
  UriJsonEmoji,
} from '../types'

export const isUnicodeEmoji = (emoji: JsonEmoji): emoji is UnicodeJsonEmoji => {
  return 'emoji' in emoji
}

export const isUriEmoji = (emoji: JsonEmoji): emoji is UriJsonEmoji => {
  return 'uri' in emoji
}

export const isUnicodeEmojiType = (emoji: EmojiType): emoji is UnicodeEmojiType => {
  return 'emoji' in emoji
}
