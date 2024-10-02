import * as React from 'react'
import { Animated, useWindowDimensions } from 'react-native'
import { EmojiStaticKeyboard } from './components/EmojiStaticKeyboard'
import { Knob } from './components/Knob'
import { KeyboardProvider } from './contexts/KeyboardProvider'
import type { KeyboardProps } from './contexts/KeyboardContext'
import { defaultKeyboardContext } from './contexts/KeyboardContext'
import type { EmojiType } from './types'
import { ModalWithBackdrop } from './components/ModalWithBackdrop'
import { getHeight } from './utils/getHeight'
import { useKeyboard } from './hooks/useKeyboard'

export const EmojiPicker = ({
  onEmojiSelected,
  onRequestClose,
  open,
  onClose,
  expandable = defaultKeyboardContext.expandable,
  defaultHeight = defaultKeyboardContext.defaultHeight,
  allowMultipleSelections = false,
  ...props
}: KeyboardProps) => {
  const { height: screenHeight } = useWindowDimensions()
  const offsetY = React.useRef(new Animated.Value(0)).current
  const height = React.useRef(new Animated.Value(getHeight(defaultHeight, screenHeight))).current
  const additionalHeight = React.useRef(new Animated.Value(0)).current
  const { keyboardVisible, keyboardHeight } = useKeyboard(open)
  const [isExpanded, setIsExpanded] = React.useState(false)

  React.useEffect(() => {
    const shouldExpandHeight = keyboardVisible && !isExpanded
    const newAdditionalHeightValue = shouldExpandHeight ? keyboardHeight : 0
    Animated.timing(additionalHeight, {
      toValue: newAdditionalHeightValue,
      useNativeDriver: false,
      duration: 200,
    }).start()
  }, [additionalHeight, isExpanded, keyboardHeight, keyboardVisible])

  const close = () => {
    height.setValue(getHeight(defaultHeight, screenHeight))
    offsetY.setValue(0)
    onClose()
  }

  return (
    <KeyboardProvider
      onEmojiSelected={(emoji: EmojiType) => {
        onEmojiSelected(emoji)
        !allowMultipleSelections && close()
      }}
      open={open}
      onClose={close}
      expandable={expandable}
      defaultHeight={defaultHeight}
      {...props}
    >
      <ModalWithBackdrop
        isOpen={open}
        backdropPress={close}
        onRequestClose={onRequestClose || close}
      >
        <>
          {expandable && (
            <Knob
              height={height}
              offsetY={offsetY}
              onClose={onClose}
              setIsExpanded={setIsExpanded}
            />
          )}
          <Animated.View
            style={[
              {
                height: Animated.add(Animated.subtract(height, offsetY), additionalHeight),
              },
            ]}
          >
            <EmojiStaticKeyboard />
          </Animated.View>
        </>
      </ModalWithBackdrop>
    </KeyboardProvider>
  )
}
