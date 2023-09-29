import { useObject, useRealm } from '@realm/react'
import React, { useCallback, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Appbar, TextInput, useTheme } from 'react-native-paper'
import { Profile } from '../../store'


export const ProfileScreen = () => {
  const realm = useRealm()
  const profile = useObject(Profile, 0)

  const theme = useTheme()
  const [maxCaloriesPerDay, setMaxCaloriesPerDay] = useState(profile?.maxCaloriesPerDay ?? 0)

  const onChangeMaxCaloriesPerDay = useCallback((value: string) => {
    const calories = Number(value)
    if (isNaN(calories)) return
    setMaxCaloriesPerDay(calories)

    if (profile) {
      realm.write(() => {
        profile.maxCaloriesPerDay = calories
      })
      
    } else {
      realm.write(() => {
        return realm.create('Profile', { _id: 0, name: 'default', maxCaloriesPerDay: calories })
      })
    }
  }, [profile, realm])
  
  return (
    <View style={[styles.wrapper, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header theme={theme} mode="small">
        <Appbar.Content title="Profile" />
      </Appbar.Header>
      <View style={styles.form}>
        <TextInput
          label="Max calories per day"
          mode="outlined"
          enterKeyHint='done'
          keyboardType='number-pad'
          value={maxCaloriesPerDay.toString()}
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