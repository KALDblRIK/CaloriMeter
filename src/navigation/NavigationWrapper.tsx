import React from 'react'
import { useTheme } from 'react-native-paper'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { HomeScreen } from '../screens/Home'
import { HistoryScreen } from '../screens/History'
import { ProfileScreen } from '../screens/Profile'

const Tab = createMaterialBottomTabNavigator()

export const NavigationWrapper = () => {
  const theme = useTheme()
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor={theme.colors.primary}
      barStyle={{ backgroundColor: theme.colors.primaryContainer }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}