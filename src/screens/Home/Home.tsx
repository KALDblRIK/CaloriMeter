import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

export const HomeScreen = () => {
  return (
    <View style={style.container}>
      <Text>Home Screen</Text>
      <Button icon="camera">
        Press me
      </Button>
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