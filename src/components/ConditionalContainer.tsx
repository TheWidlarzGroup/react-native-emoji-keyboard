import React, { type ReactNode } from 'react'
import { SafeAreaView, View, type ViewProps } from 'react-native'

type ConditionalContainerTypes = {
  children: ReactNode
  container: (children: ReactNode) => ReactNode
  condition: boolean
}
export const ConditionalContainer = ({
  children,
  container,
  condition,
}: ConditionalContainerTypes) => <>{condition ? container(children) : children}</>

type IsSafeAreaWrapperProps = {
  children: ReactNode
  isSafeArea: boolean
} & ViewProps
export const IsSafeAreaWrapper = ({ children, isSafeArea, ...props }: IsSafeAreaWrapperProps) =>
  isSafeArea ? (
    <SafeAreaView {...props}>{children}</SafeAreaView>
  ) : (
    <View {...props}>{children}</View>
  )
