import * as React from 'react'
import {
  Modal,
  Animated,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  type ModalProps,
} from 'react-native'
import { KeyboardContext } from '../contexts/KeyboardContext'
import { useTimeout } from '../hooks/useTimeout'
import { IsSafeAreaWrapper } from './ConditionalContainer'

type ModalWithBackdropProps = {
  isOpen: boolean
  backdropPress: () => void
  children: React.ReactNode
}

export const ModalWithBackdrop = ({
  isOpen,
  backdropPress,
  children,
  ...rest
}: ModalWithBackdropProps & ModalProps) => {
  const { height: screenHeight } = useWindowDimensions()
  const translateY = React.useRef(new Animated.Value(screenHeight)).current
  const { theme, disableSafeArea } = React.useContext(KeyboardContext)
  const handleTimeout = useTimeout()

  React.useEffect(() => {
    Animated.spring(translateY, {
      toValue: isOpen ? 0 : screenHeight,
      useNativeDriver: true,
    }).start()
  }, [isOpen, screenHeight, translateY])

  const handleClose = () => {
    Animated.spring(translateY, {
      toValue: screenHeight,
      useNativeDriver: true,
    }).start()
    handleTimeout(() => backdropPress(), 200)
  }

  return (
    <Modal visible={isOpen} animationType="fade" transparent={true} {...rest}>
      <TouchableOpacity
        style={[styles.modalContainer, { backgroundColor: theme.backdrop }]}
        activeOpacity={1}
        onPress={handleClose}
      >
        <View style={[styles.modalContainer, { backgroundColor: theme.backdrop }]}>
          <IsSafeAreaWrapper style={styles.modalContainer} isSafeArea={!disableSafeArea}>
            <TouchableOpacity activeOpacity={1}>
              <Animated.View
                style={{
                  transform: [{ translateY }],
                }}
              >
                {children}
              </Animated.View>
            </TouchableOpacity>
          </IsSafeAreaWrapper>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: { flex: 1, justifyContent: 'flex-end' },
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    elevation: 10,
  },
})
