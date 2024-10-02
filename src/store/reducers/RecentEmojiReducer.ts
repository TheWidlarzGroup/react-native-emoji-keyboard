import type { JsonEmoji } from 'src/types'

export type RecentEmojiState = {
  recentlyUsed: JsonEmoji[]
}

export type RecentEmojiAction =
  | { type: 'RECENT_EMOJI_INIT'; payload: JsonEmoji[] }
  | { type: 'RECENT_EMOJI_ADD'; payload: JsonEmoji }
  | { type: 'RECENT_EMOJI_REMOVE'; payload: JsonEmoji }
  | { type: 'RECENT_EMOJI_CLEAR' }

export default function recentEmojiReducer(
  state: RecentEmojiState,
  action: RecentEmojiAction,
): RecentEmojiState {
  switch (action.type) {
    case 'RECENT_EMOJI_INIT':
      return { ...state, recentlyUsed: action.payload }
    case 'RECENT_EMOJI_ADD':
      return {
        ...state,
        recentlyUsed: [action.payload, ...filterEmoji(state, action.payload)],
      }
    case 'RECENT_EMOJI_REMOVE':
      return {
        ...state,
        recentlyUsed: filterEmoji(state, action.payload),
      }
    case 'RECENT_EMOJI_CLEAR':
      return { ...state, recentlyUsed: [] }
    default:
      return state
  }
}

const filterEmoji = (state: RecentEmojiState, emoji: JsonEmoji) =>
  state.recentlyUsed.filter((usedEmoji) => usedEmoji.name !== emoji.name)
