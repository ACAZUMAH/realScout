import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { appRoutes } from 'src/constants'
import Explore from 'src/explore/Explore'
import { Home } from 'src/Home'
import { Profile } from 'src/profile'

const BottomTabs = createBottomTabNavigator()

export const TabsNavigator = () => {
  return (
    <BottomTabs.Navigator>
        <BottomTabs.Screen name={appRoutes.HOME} component={Home} />
        <BottomTabs.Screen name={appRoutes.EXPLORE} component={Explore} />
        <BottomTabs.Screen name={appRoutes.PROFILE} component={Profile} />
    </BottomTabs.Navigator>
  )
}
