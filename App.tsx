import React from 'react'
import { useColorScheme } from 'react-native'
import { RealmProvider } from '@realm/react'

import { MD3LightTheme, MD3DarkTheme, PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { useMaterial3Theme } from '@pchmn/expo-material3-theme'

import { NavigationWrapper } from './src/navigation'
import { storeConfig } from './src/store'


const App = () => {
  const colorScheme = useColorScheme()
  const { theme } = useMaterial3Theme({ fallbackSourceColor: '#3DDC84' })
  const paperTheme = colorScheme === 'dark' ? { ...MD3DarkTheme, colors: theme.dark } : { ...MD3LightTheme, colors: theme.light }

  return (
    <RealmProvider {...storeConfig}>
      <PaperProvider theme={paperTheme}>
        <NavigationContainer>
          <NavigationWrapper />
        </NavigationContainer>
      </PaperProvider>
    </RealmProvider>
  )
}

export default App
