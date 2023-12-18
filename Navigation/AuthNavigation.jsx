import React, { useState } from "react";
import { View, Text } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FirstContext } from "../Contexts/Auth";
import Screen1 from "../Screens/Question1/Screen1";
import Screen2 from "../Screens/Question1/Screen2";
import Screen3 from "../Screens/Question1/Screen3";
import Screen4 from "../Screens/Question1/Screen4";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SecondContext } from "../Contexts/SecondContext";

const AuthNavigation = () => {
  const Tab = createMaterialBottomTabNavigator();
  const [name, setName] = useState("");
  const [registration, setRegistration] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const setDetails = (name, registration) => {
    setName(name);
    setRegistration(registration);
  };

  const setDetails2 = (city, state) => {
    setCity(city);
    setState(state);
  };
  return (
    <FirstContext.Provider
      value={{
        registration,
        name,
        setDetails,
      }}
    >
      <SecondContext.Provider
        value={{
          city,
          state,
          setDetails2,
        }}
      >
        <Tab.Navigator barStyle={{ backgroundColor: "#bfbfbf" }}>
          <Tab.Screen
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="account" color={color} size={26} />
              ),
            }}
            name="screen1"
            component={Screen1}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="account" color={color} size={26} />
              ),
            }}
            name="screen2"
            component={Screen2}
          />

          <Tab.Screen
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="account" color={color} size={26} />
              ),
            }}
            name="screen3"
            component={Screen3}
          />

          <Tab.Screen
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="account" color={color} size={26} />
              ),
            }}
            name="screen4"
            component={Screen4}
          />
          
        </Tab.Navigator>
      </SecondContext.Provider>
    </FirstContext.Provider>
  );
};

export default AuthNavigation;
