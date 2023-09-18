import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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