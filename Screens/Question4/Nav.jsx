import React,{useState, useEffect} from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Home from './Home'

const Nav = () => {
    const Tabs = createMaterialBottomTabNavigator();
    const [products, setProducts] = useState([])

    const getProducts = () => {
        fetch('http://localhost/getProds.php')
        .then(res => res.json())
        .then(data => console.log(data))
    }

    useEffect(() => {
        getProducts()
    }, [])
  return (
    <Tabs.Navigator>
        <Tabs.Screen name="Home" component={Home} options={{
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="home" color={color} size={26} />
        }} />
      
    </Tabs.Navigator>
  )
}

export default Nav
