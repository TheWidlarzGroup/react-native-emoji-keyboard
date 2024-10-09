import { EmojiPicker } from './EmojiPicker'
import { EmojiKeyboard } from './EmojiKeyboard'
import { useRecentPicksPersistence } from './hooks/useRecentPicksPersistence'
import en from './translation/en'
import pl from './translation/pl'
import ko from './translation/ko'
import it from './translation/it'
import fr from './translation/fr'
import id from './translation/id'
import es from './translation/es'
import de from './translation/de'
import pt from './translation/pt'
import ru from './translation/ru'
import ua from './translation/ua'
import vi from './translation/vi'
import cs from './translation/cs'
import ja from './translation/ja'
import tr from './translation/tr'
import no from './translation/no'
import ro from './translation/ro'
import np from './translation/np'
import se from './translation/se'
import EmojisData from './assets/emojis.json'
import type { EmojisByCategory } from './types'

export { EmojiKeyboard }
export { useRecentPicksPersistence }
export { en, pl, ko, it, fr, id, es, de, pt, ru, ua, vi, cs, ja, tr, no, ro, np, se }
export type { EmojisByCategory, EmojiType } from './types'
export const emojisByCategory = EmojisData as Array<EmojisByCategory>

export default EmojiPicker
