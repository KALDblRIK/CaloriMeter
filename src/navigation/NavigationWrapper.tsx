import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { createMyNavigator } from './TabNavigator'
import { HistoryScreen, TodayScreen, ProfileScreen } from '../screens'

const Tab = createMyNavigator()

export const NavigationWrapper = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      actionButtons={[{
        label: 'Add meal',
        icon: 'plus',
        onPress: () => {}
      }]}
    >
      <Tab.Screen
        name="Today"
        component={TodayScreen}
        options={{
          tabBarLabel: 'Today',
          tabBarIcon: ({ color, size }: { color: string; size: number}) => {
            return <Icon name="calendar-today" size={size} color={color} />
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }: { color: string; size: number}) => {
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
          tabBarIcon: ({ color, size }: { color: string; size: number}) => {
            return <Icon name="account" size={size} color={color} />
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}