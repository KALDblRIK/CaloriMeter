import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Appbar, TextInput, useTheme } from 'react-native-paper'

export const ProfileScreen = () => {
  const theme = useTheme()
  const [maxCaloriesPerDay, setMaxCaloriesPerDay] = useState(0)

  const onChangeMaxCaloriesPerDay = (calories: string) => {
    if (isNaN(Number(calories))) return
    setMaxCaloriesPerDay(Number(calories))
  }
  
  return (
    <View style={styles.wrapper}>
      <Appbar.Header theme={theme} mode="small">
        <Appbar.Content title="Profile" />
      </Appbar.Header>
      <View style={styles.form}>
        <TextInput
          label="Max calories per day"
          mode="outlined"
          enterKeyHint='done'
          keyboardType='number-pad'
          value={isNaN(maxCaloriesPerDay) ? '0' : maxCaloriesPerDay.toString()}
          onChangeText={onChangeMaxCaloriesPerDay}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  form: {
    margin: 16,
  }
})