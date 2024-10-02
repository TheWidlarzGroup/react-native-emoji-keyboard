import * as React from 'react'
import { Image } from 'react-native'

type Props = {
  fill: string
}

const iconDimensions = { width: 12, height: 10 }
export const Funnel = ({ fill }: Props) => (
  <Image source={require('./funnel.png')} style={[{ tintColor: fill }, iconDimensions]} />
)
