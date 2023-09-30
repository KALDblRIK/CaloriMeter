import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { Appbar, FAB, Text, useTheme } from 'react-native-paper'

export const HomeScreen = () => {
  const theme = useTheme()

  return (
    <>
      <Appbar.Header theme={theme} mode="small">
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <SafeAreaView style={[styles.wrapper, { backgroundColor: theme.colors.background }]}>
        <FAB
          icon="plus"
          style={styles.fab}
          label='Add meal'
        />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})