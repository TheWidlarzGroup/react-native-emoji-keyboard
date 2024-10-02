import { Slot, Stack, usePathname } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { screens } from '../index'

export default function ExampleLayout() {
  const pathname = usePathname().replaceAll('/', '')
  const title = screens[('/' + pathname) as keyof typeof screens]

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title }} />
      <Slot />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 2 / 3,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
})
