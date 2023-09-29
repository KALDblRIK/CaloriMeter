import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Appbar, useTheme } from 'react-native-paper'

export const HomeScreen = () => {
  const theme = useTheme()

  return (
    <View style={[styles.wrapper, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header theme={theme} mode="small">
        <Appbar.Content title="Home" />
      </Appbar.Header>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
})