import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'

import { HomeScreen } from '../screens/Home'
import { HistoryScreen } from '../screens/History'
import { ProfileScreen } from '../screens/Profile'

const Tab = createMaterialBottomTabNavigator()

export const NavigationWrapper = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: 'bell',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: 'account',
        }}
      />
    </Tab.Navigator>
  )
}