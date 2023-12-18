import React from 'react'
import CustomerLogin from './CustomerLogin'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import SellerLogin from './SellerLogin';
const Nav = () => {
    const Tab = createMaterialBottomTabNavigator()
    const Stack = createStackNavigator()
    const AuthNav = () => {
        return (
            <Tab.Navigator>
              <Tab.Screen name="CustomerLogin"
              options={{ 
                tabBarLabel: 'Customer Login',
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="user" color={color} size={26} />
                ),
               }}
               component={CustomerLogin} />

                <Tab.Screen name="SellerLogin"
                options={{ 
                  tabBarLabel: 'Seller Login',
                  tabBarIcon: ({ color }) => (
                    <FontAwesome name="user" color={color} size={26} />
                  ),
                 }}
                 component={SellerLogin} />

            </Tab.Navigator>
        )
    }
  return (
    <Stack.Navigator initialRouteName='Auth'>
        <Stack.Screen name='Auth' component={AuthNav} options={{ headerShown:false }}/>
    </Stack.Navigator>
  )
}

export default Nav
