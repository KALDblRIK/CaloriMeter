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
import { Compact, Medium } from './variants'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type TabNavigationConfig = {
  tabBarStyle?: StyleProp<ViewStyle>
  contentStyle?: StyleProp<ViewStyle>
  actionButtons?: ActionButtonProps[]
}

export type ActionButtonProps = {
  label: string
  icon: string
  onPress: () => void
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
    actionButtons,
  } = props
  const insets = useSafeAreaInsets()

  const navigationProps = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName,
  })

  const { width } = useWindowDimensions()


  if (width >= 600) {
    return (
      <Medium
        insets={insets}
        tabBarStyle={tabBarStyle}
        contentStyle={contentStyle}
        navigationProps={navigationProps}
        actionButtons={actionButtons}
      />
    )
  }

  return (
    <Compact
      insets={insets}
      tabBarStyle={tabBarStyle}
      contentStyle={contentStyle}
      navigationProps={navigationProps}
      actionButtons={actionButtons}
    />
  )
}

export const createMyNavigator = createNavigatorFactory(TabNavigator)