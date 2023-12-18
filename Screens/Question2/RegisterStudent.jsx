import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { AuthStyles } from "../../Styles/Auth.Style";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "react-native-paper"; 

const RegisterStudent = () => { 
  const [data, setData] = useState({
    registration: "",
    name: "",
    password: "",
  });

  const reset = () => {
    setData({
      registration: "",
      name: "",
      password: "",
    });
  };

  const Register = async () => {
    try {
      const users = await AsyncStorage.getItem("students");
      if (users) {
        const parsedUsers = JSON.parse(users);
        const newUser = {
          registration: data.registration.toLowerCase(),
          name: data.name,
          password: data.password,
        };
        parsedUsers.push(newUser);
        await AsyncStorage.setItem("students", JSON.stringify(parsedUsers)); 
        alert("User Registered Successfully");
        reset();
      } else {
        const newUser = {
          registration: data.registration.toLowerCase(),
          name: data.name,
          password: data.password,
        };
        await AsyncStorage.setItem("students", JSON.stringify([newUser]));
        alert("User Registered Successfully");
        reset();
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <View style={AuthStyles.container}>
      <Text style={AuthStyles.heading}>Register Student</Text>

      <TextInput
        label="Registration No"
        value={data.registration}
        style={AuthStyles.input}
        onChangeText={(text) => setData({ ...data, registration: text })}
      />

      <TextInput
        label="Name"
        value={data.name}
        style={AuthStyles.input}
        onChangeText={(text) => setData({ ...data, name: text })}
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
          mode="contained"
          style={[AuthStyles.Button, { width: 170, margin: 10 }]}
          onPress={() => reset()}
        >
          Reset
        </Button>
        <Button
          mode="contained"
          style={[AuthStyles.Button, { width: 170, margin: 10 }]}
          onPress={() => Register()}
        >
          Register
        </Button>
      </View>
    </View>
  );
};

export default RegisterStudent;
