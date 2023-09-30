import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { createMyNavigator } from './TabNavigator'
import { HistoryScreen, HomeScreen, ProfileScreen } from '../screens'
import { View } from 'react-native'

const Tab = createMyNavigator()

export const NavigationWrapper = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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