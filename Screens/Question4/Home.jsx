import React from 'react'
import { AuthStyles } from '../../Styles/Auth.Style'
import { View, Text } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import Ionicons from '@expo/vector-icons/Ionicons'



const Home = () => {
  return (
    <>
        <View style={AuthStyles.container}>
            <View style={AuthStyles.form}>
            <Text style={AuthStyles.heading}>Home</Text>
            <Text style={AuthStyles.heading}>Welcome to Home</Text>
            </View>
        </View>
      
    </>
  )
}

export default Home
