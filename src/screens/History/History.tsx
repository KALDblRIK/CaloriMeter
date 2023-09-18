import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export const HistoryScreen = () => {
  return (
    <View style={style.container}>
      <Text>History Screen</Text>
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