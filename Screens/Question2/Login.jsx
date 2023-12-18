import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { AuthStyles } from "../../Styles/Auth.Style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput, Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../Redux/Slices/AuthSlice";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const reset = () => {
    setData({
      username: "",
      password: "",
    });
  };
  const Dispatch = useDispatch();

  const Authorize = async () => {
    try {
      const admin = await AsyncStorage.getItem("admin");
      const adminData = JSON.parse(admin);
      if (
        adminData.username == data.username.toLocaleLowerCase() &&
        adminData.password == data.password
      ) {
        alert("Login Successfull");
        Dispatch(
          login({
            username: data.username,
            registration: null,
            role: "admin",
            Authorized: true,
          })
        );
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <View style={AuthStyles.container}>
      <Text style={AuthStyles.heading}>Student Information System</Text>
      <TextInput
        label="Username"
        value={data.username}
        style={AuthStyles.input}
        onChangeText={(text) => setData({ ...data, username: text })}
      />
      <TextInput
        label="Password"
        value={data.password}
        style={AuthStyles.input}
        onChangeText={(text) => setData({ ...data, password: text })}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Button
          onPress={Authorize}
          style={[AuthStyles.Button, { margin: 10, flex: 1 }]}
        >
          <Text style={AuthStyles.ButtonText}>Login</Text>
        </Button>

        <Button
          onPress={reset}
          style={[AuthStyles.Button, { margin: 10, flex: 1 }]}
        >
          <Text style={AuthStyles.ButtonText}>Reset</Text>
        </Button>
      </View>
    </View>
  );
};

export default Login;
