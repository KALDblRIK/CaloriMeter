import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Appbar, useTheme } from 'react-native-paper'

export const TodayScreen = () => {
  const theme = useTheme()

  return (
    <>
      <Appbar.Header theme={theme} mode="small">
        <Appbar.Content title="Today" />
      </Appbar.Header>
      <SafeAreaView style={styles.wrapper}>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
  },
})