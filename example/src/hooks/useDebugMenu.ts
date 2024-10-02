import React from 'react'
import { DevSettings } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const useDebugMenu = () => {
  React.useEffect(() => {
    const clearAndReload = () => {
      AsyncStorage.clear().then(() => DevSettings.reload())
    }

    DevSettings.addMenuItem('Clear Async Storage', clearAndReload)
  }, [])

  return {}
}
