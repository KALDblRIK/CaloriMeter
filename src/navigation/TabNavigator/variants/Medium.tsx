import React from 'react'
import { CommonActions, useNavigationBuilder } from '@react-navigation/native'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { EdgeInsets } from 'react-native-safe-area-context'
import { useTheme } from 'react-native-paper'
import LeftNavigation from '../../../components/Forked/LeftNavigation/LeftNavigation'
import { ActionButtonProps } from '../TabNavigator'

type MediumProps = {
  navigationProps: ReturnType<typeof useNavigationBuilder>
  insets: EdgeInsets
  tabBarStyle: StyleProp<ViewStyle>
  contentStyle: StyleProp<ViewStyle>
  actionButtons?: ActionButtonProps[]
}

export const Medium = (props: MediumProps) => {
  const { navigationProps, insets, contentStyle, actionButtons } = props
  const theme = useTheme()
  const { navigation, NavigationContent, state, descriptors } = navigationProps

  return (
    <NavigationContent>
      <View style={styles.wrapper}>
        <LeftNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          actionButtons={actionButtons}
          onTabPress={({ route }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            // @ts-ignore
            if (!event.defaultPrevented) {
              navigation.dispatch({
                ...CommonActions.navigate(route),
                target: state.key,
              })
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key]
            // @ts-ignore
            if (options.tabBarIcon) {
              // @ts-ignore
              return options.tabBarIcon({ focused, color, size: 24 })
            }

            return null
          }}
          getLabelText={({ route }) => {
            // @ts-ignore
            return descriptors[route.key].options.tabBarLabel || route.title
          }}
          theme={theme}
        />
        <View style={[styles.content, contentStyle, { backgroundColor: theme.colors.background }]}>
          {state.routes.map((route, i) => {
            return (
              <View
                key={route.key}
                style={[styles.screen, i === state.index ? styles.shown : styles.hidden]}
              >
                {descriptors[route.key].render()}
              </View>
            )
          })}
        </View>
      </View>
    </NavigationContent>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  content: {
    flexGrow: 1,
  },
  screen: {
    flexGrow: 1,
  },
  shown: {
    display: 'flex',
  },
  hidden: {
    display: 'none',
  }
})