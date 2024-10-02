import * as React from 'react'
import { Image, type ImageSourcePropType } from 'react-native'

type Props = {
  fill: string
  source: ImageSourcePropType
}
export const iconDimensions = { width: 22, height: 22 }

export default ({ fill, source }: Props) => (
  <Image source={source} style={[{ tintColor: fill }, iconDimensions]} />
)
