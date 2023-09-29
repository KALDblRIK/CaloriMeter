import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Appbar, FAB, useTheme } from 'react-native-paper'

export const HomeScreen = () => {
  const theme = useTheme()

  return (
    <View style={[styles.wrapper, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header theme={theme} mode="small">
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <FAB
        icon="plus"
        style={styles.fab}
        label='Add meal'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})