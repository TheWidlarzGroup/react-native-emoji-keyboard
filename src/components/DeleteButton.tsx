import React from 'react'
import {
  View,
  Pressable,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
  type PressableProps,
} from 'react-native'
import { KeyboardContext } from '../contexts/KeyboardContext'
import { Icon } from './Icon'

type CustomButtonType = {
  containerStyle?: StyleProp<ViewStyle>
  iconNormalColor?: string
  iconActiveColor?: string
} & PressableProps

export const DeleteButton = ({
  containerStyle,
  iconNormalColor,
  iconActiveColor,
  ...pressableProps
}: CustomButtonType) => {
  const { theme } = React.useContext(KeyboardContext)
  return (
    <View style={[styles.buttonContainer, containerStyle]}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? theme.customButton.backgroundPressed
              : theme.customButton.background,
            padding: 8,
            borderRadius: 100,
          },
          styles.button,
        ]}
        {...pressableProps}
      >
        {({ pressed }) => (
          <Icon
            iconName="Backspace"
            isActive={pressed}
            normalColor={iconNormalColor || theme.customButton.icon}
            activeColor={iconActiveColor || theme.customButton.iconPressed}
          />
        )}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 16,
    marginLeft: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
