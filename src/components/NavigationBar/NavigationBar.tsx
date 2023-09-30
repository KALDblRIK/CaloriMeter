import React from 'react'
import { CommonActions } from '@react-navigation/native'
import { BottomNavigation, Text } from 'react-native-paper'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useWindowDimensions } from 'react-native'

export const NavigationBar = (props: BottomTabBarProps) => {
  const { navigation, state, descriptors, insets } = props
  const { width } = useWindowDimensions()

  if (width >= 600 && width < 840) {
    return (
      <Text>Medium</Text>
    )
  }

  if (width >= 840) {
    return (
      <Text>Expanded</Text>
    )
  }

  return (
    <BottomNavigation.Bar
      navigationState={state}
      safeAreaInsets={insets}
      onTabPress={({ route, preventDefault }) => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        })

        if (event.defaultPrevented) {
          preventDefault()
        } else {
          navigation.dispatch({
            ...CommonActions.navigate(route.name, route.params),
            target: state.key,
          })
        }
      }}
      renderIcon={({ route, focused, color }) => {
        const { options } = descriptors[route.key]
        if (options.tabBarIcon) {
          return options.tabBarIcon({ focused, color, size: 24 })
        }

        return null
      }}
      getLabelText={({ route }) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route?.title

        return label
      }}
    />
  )
}