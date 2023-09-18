import React from 'react'
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'

import { NavigationWrapper } from './src/navigation'

function App(): JSX.Element {
  return (
    <PaperProvider
      theme={DefaultTheme}
    >
      <NavigationContainer>
        <NavigationWrapper />
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App
