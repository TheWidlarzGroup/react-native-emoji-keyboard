import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Link } from 'example/src/components/Link'
import { Stack } from 'expo-router'

export const screens = {
  '/basic': 'Basic',
  '/category-top': 'Category Top',
  '/category-bottom': 'Category Bottom',
  '/emoji-data': 'Custom Emojis Data',
  '/dark': 'Dark theme',
  '/disabled-categories': 'Disabled Categories',
  '/enable-recently': 'Recently used',
  '/enable-recently-persistence': 'Recently used with persistence',
  '/static-modal': 'Static Modal (without knob)',
  '/static': 'Static Component',
  '/search': 'Search Bar',
  '/selected-emojis': 'Selected Emojis',
  '/translated': 'Translated',
  '/custom-buttons': 'Custom Button',
} as const

export default function App() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Home' }} />
      {Object.keys(screens).map((key) => (
        <Link href={key} key={key}>
          {screens[key as keyof typeof screens]}
        </Link>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
