import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Text } from 'react-native-paper'

export const Expanded = (props: BottomTabBarProps) => {
  const { navigation, state, descriptors, insets } = props

  return (
    <Text>Expanded</Text>
  )
}