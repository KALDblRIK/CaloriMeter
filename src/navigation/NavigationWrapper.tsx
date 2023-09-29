import React from 'react'
import { CommonActions } from '@react-navigation/native'
import { BottomNavigation } from 'react-native-paper'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeScreen } from '../screens/Home'
import { HistoryScreen } from '../screens/History'
import { ProfileScreen } from '../screens/Profile'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

const TabBar = (props: BottomTabBarProps) => {
  const { navigation, state, descriptors, insets } = props

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

export const NavigationWrapper = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={TabBar}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="history" size={size} color={color} />
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="account" size={size} color={color} />
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}