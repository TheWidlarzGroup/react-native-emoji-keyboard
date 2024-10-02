import type { JsonEmoji, UnicodeEmojiType, UriEmojiType } from 'src/types'
import { isUnicodeEmoji } from './typeguards'

export const parseEmoji = (emoji: JsonEmoji): UnicodeEmojiType | UriEmojiType => {
  return isUnicodeEmoji(emoji)
    ? {
        name: emoji.name,
        emoji: emoji.emoji,
        unicode_version: emoji.v,
        slug: emoji?.name?.replace(/ /g, '_'),
        toneEnabled: emoji.toneEnabled,
      }
    : {
        name: emoji.name,
        uri: emoji.uri,
        slug: emoji?.name?.replace(/ /g, '_'),
      }
}
