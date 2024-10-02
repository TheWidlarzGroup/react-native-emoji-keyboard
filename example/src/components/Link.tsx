import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Link as ExpoLink } from 'expo-router'

type ButtonProps = {
  href: string
  children: React.ReactNode
}
export const Link = (p: ButtonProps) => {
  return (
    <ExpoLink href={p.href}>
      <View style={styles.container}>
        <Text>{p.children}</Text>
      </View>
    </ExpoLink>
  )
}

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
})
