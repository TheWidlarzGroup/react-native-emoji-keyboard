import React from 'react'
import { useRecentPicksPersistence } from 'rn-emoji-keyboard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import EnableRecently from './enable-recently'

const STORAGE_KEY = 'RN-EMOJI-KEYBOARD_RECENT'
export default function () {
  useRecentPicksPersistence({
    initialization: () =>
      AsyncStorage.getItem(STORAGE_KEY).then((item) => JSON.parse(item || '[]')),
    onStateChange: (next) => AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)),
  })

  return <EnableRecently />
}
