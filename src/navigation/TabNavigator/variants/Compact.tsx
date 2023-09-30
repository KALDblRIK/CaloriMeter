import React from 'react'
import { CommonActions, useNavigationBuilder } from '@react-navigation/native'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { EdgeInsets } from 'react-native-safe-area-context'
import BottomNavigation from '../../../components/Forked/BottomNavigation/BottomNavigation'
import { FAB, useTheme } from 'react-native-paper'
import { ActionButtonProps } from '../TabNavigator'

type CompactProps = {
  navigationProps: ReturnType<typeof useNavigationBuilder>
  insets: EdgeInsets
  tabBarStyle: StyleProp<ViewStyle>
  contentStyle: StyleProp<ViewStyle>
  actionButtons?: ActionButtonProps[]
}

export const Compact = (props: CompactProps) => {
  const { navigationProps, insets, contentStyle, actionButtons } = props
  const theme = useTheme()
  const { navigation, NavigationContent, state, descriptors } = navigationProps

  return (
    <NavigationContent>
      <View style={[styles.content, contentStyle]}>
        <>
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
        </>
        {actionButtons?.map((props) => (
          <FAB
            key={props.title}
            style={styles.fab}
            {...props}
          />)
        )}
      </View>
      <BottomNavigation.Bar
        navigationState={state}
        safeAreaInsets={insets}
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
    </NavigationContent>
  )
}

const styles = StyleSheet.create({
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
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})