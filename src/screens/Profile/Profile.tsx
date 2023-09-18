import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Appbar, useTheme } from 'react-native-paper'

export const ProfileScreen = () => {
  const theme = useTheme()
  return (
    <View style={style.wrapper}>
      <Appbar.Header theme={theme} mode="small">
        <Appbar.Content title="Profile" />
      </Appbar.Header>
    </View>
  )
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
})