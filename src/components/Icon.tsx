import * as React from 'react'

import type { IconNames } from '../types'
import { exhaustiveTypeCheck } from '../utils/exhaustiveTypeCheck'
import PngIcon from '../assets/icons/PngIcon'

export const Icon = ({
  iconName,
  isActive,
  normalColor,
  activeColor,
}: {
  iconName: IconNames | 'Close' | 'QuestionMark' | 'Backspace'
  isActive: boolean
  normalColor: string
  activeColor: string
}) => {
  const color = isActive ? activeColor : normalColor
  switch (iconName) {
    case 'Smile':
      return <PngIcon fill={color} source={require('../assets/icons/smile.png')} />
    case 'Trees':
      return <PngIcon fill={color} source={require('../assets/icons/trees.png')} />
    case 'Pizza':
      return <PngIcon fill={color} source={require('../assets/icons/pizza.png')} />
    case 'Plane':
      return <PngIcon fill={color} source={require('../assets/icons/plane.png')} />
    case 'Football':
      return <PngIcon fill={color} source={require('../assets/icons/football.png')} />
    case 'Lightbulb':
      return <PngIcon fill={color} source={require('../assets/icons/lightbulb.png')} />
    case 'Flag':
      return <PngIcon fill={color} source={require('../assets/icons/flag.png')} />
    case 'Ban':
      return <PngIcon fill={color} source={require('../assets/icons/ban.png')} />
    case 'Users':
      return <PngIcon fill={color} source={require('../assets/icons/users.png')} />
    case 'Search':
      return <PngIcon fill={color} source={require('../assets/icons/search.png')} />
    case 'Close':
      return <PngIcon fill={color} source={require('../assets/icons/close.png')} />
    case 'Clock':
      return <PngIcon fill={color} source={require('../assets/icons/clock.png')} />
    case 'QuestionMark':
      return <PngIcon fill={color} source={require('../assets/icons/questionMark.png')} />
    case 'Backspace':
      return <PngIcon fill={color} source={require('../assets/icons/backspace.png')} />
    case 'Sparkles':
      return <PngIcon fill={color} source={require('../assets/icons/sparkles.png')} />
    default:
      exhaustiveTypeCheck(iconName)
      return null
  }
}
