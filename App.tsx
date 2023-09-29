import React from 'react'
import { useColorScheme } from 'react-native'
import Realm from 'realm'
import { RealmProvider } from '@realm/react'

import { MD3LightTheme, MD3DarkTheme, PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { useMaterial3Theme } from '@pchmn/expo-material3-theme'

import { NavigationWrapper } from './src/navigation'

export class Profile extends Realm.Object<Profile> {
  _id!: number
  name!: string
  maxCaloriesPerDay?: number
  static schema = {
    name: 'Profile',
    properties: {
      _id: 'int',
      name: 'string',
      maxCaloriesPerDay: 'int',
    },
    primaryKey: '_id',
  }
}

const realmConfig: Realm.Configuration = {
  schema: [Profile],
}

const App = () => {
  const colorScheme = useColorScheme()
  const { theme } = useMaterial3Theme({ fallbackSourceColor: '#3DDC84' })
  const paperTheme = colorScheme === 'dark' ? { ...MD3DarkTheme, colors: theme.dark } : { ...MD3LightTheme, colors: theme.light }

  return (
    <RealmProvider {...realmConfig}>
      <PaperProvider theme={paperTheme}>
        <NavigationContainer>
          <NavigationWrapper />
        </NavigationContainer>
      </PaperProvider>
    </RealmProvider>
  )
}

export default App
