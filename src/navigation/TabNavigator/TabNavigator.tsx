import * as React from 'react'
import { StyleProp, ViewStyle, useWindowDimensions } from 'react-native'
import {
  useNavigationBuilder,
  TabRouter,
  createNavigatorFactory,
  DefaultNavigatorOptions,
  TabRouterOptions,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native'
import { Compact, Expanded, Medium } from './variants'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type TabNavigationConfig = {
  tabBarStyle?: StyleProp<ViewStyle>
  contentStyle?: StyleProp<ViewStyle>
}

type TabNavigationOptions = {
  title?: string
}

type TabNavigationEventMap = {
  tabPress: {
    data: { isAlreadyFocused: boolean }
    canPreventDefault: true
  }
}

type TabNavigatorProps = DefaultNavigatorOptions<
    ParamListBase,
    TabNavigationState<ParamListBase>,
    TabNavigationOptions,
    TabNavigationEventMap
  > &
  TabRouterOptions &
  TabNavigationConfig


const TabNavigator = (props: TabNavigatorProps) => {
  const {
    initialRouteName,
    children,
    screenOptions,
    tabBarStyle,
    contentStyle,
  } = props
  const insets = useSafeAreaInsets()

  const navigationProps = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName,
  })

  const { width } = useWindowDimensions()


  if (width >= 840) {
    return <Expanded />
  }

  if (width >= 600 && width < 840) {
    return <Medium />
  }

  return (
    <Compact
      insets={insets}
      tabBarStyle={tabBarStyle}
      contentStyle={contentStyle}
      navigationProps={navigationProps}
    />
  )
}

export const createMyNavigator = createNavigatorFactory(TabNavigator)