import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchActivity from './SearchActivity'
import ViewRecord from './ViewRecord'

const Nav = () => {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchActivity" component={SearchActivity} />
        <Stack.Screen name="ViewRecord" component={ViewRecord} />
    </Stack.Navigator>
  )
}

export default Nav
