import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export const HomeScreen = () => {
  return (
    <View style={style.container}>
      <Text>Home Screen</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})