import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type ButtonProps = {
  onPress: () => void
  label: string
}
export const Button = (p: ButtonProps) => {
  return (
    <TouchableOpacity onPress={p.onPress} style={styles.container}>
      <Text style={styles.text}>{p.label}</Text>
    </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c',
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignSelf: 'center',
    borderRadius: 32,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
})
