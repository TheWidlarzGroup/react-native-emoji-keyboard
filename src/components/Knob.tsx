import * as React from 'react'
import {
  Animated,
  useWindowDimensions,
  StyleSheet,
  View,
  PanResponder,
  Keyboard,
} from 'react-native'
import { getHeight } from '../utils/getHeight'
import { KeyboardContext } from '../contexts/KeyboardContext'

type KnobProps = {
  offsetY: Animated.Value
  height: Animated.Value
  onClose: () => void
  setIsExpanded: (isExpanded: boolean) => void
}

export const Knob = ({ offsetY, height, onClose, setIsExpanded }: KnobProps) => {
  const { height: screenHeight } = useWindowDimensions()
  const {
    expandedHeight,
    defaultHeight,
    theme,
    styles: themeStyles,
  } = React.useContext(KeyboardContext)

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: () => Keyboard.dismiss(),
      onPanResponderMove: Animated.event([null, { dy: offsetY }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gestureState) => {
        Animated.spring(offsetY, {
          useNativeDriver: false,
          toValue: 0,
        }).start()
        if (gestureState.dy < -50) {
          setIsExpanded(true)
          Animated.spring(height, {
            useNativeDriver: false,
            toValue: getHeight(expandedHeight, screenHeight),
          }).start()
        } else if (gestureState.dy > 150) {
          setIsExpanded(false)
          height.setValue(getHeight(defaultHeight, screenHeight))
          offsetY.setValue(0)
          onClose()
        } else {
          setIsExpanded(false)
          Animated.spring(height, {
            useNativeDriver: false,
            toValue: getHeight(defaultHeight, screenHeight),
          }).start()
        }
      },
      onShouldBlockNativeResponder: () => true,
    }),
  ).current

  return (
    <View {...panResponder.panHandlers}>
      <View style={styles.panContainer}>
        <Animated.View style={[styles.knob, { backgroundColor: theme.knob }, themeStyles.knob]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  panContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    alignSelf: 'center',
    flexDirection: 'column-reverse',
    backgroundColor: '#00000000',
  },
  knob: {
    height: 6,
    width: 50,
    marginBottom: 6,
    alignSelf: 'center',
    borderRadius: 4,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
  },
})
