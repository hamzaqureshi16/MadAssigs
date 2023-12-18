import React, { useEffect, useState } from "react";
import { AuthStyles } from "../../Styles/Auth.Style";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { db } from "../../firebase.config";
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const CustomerLogin = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const Login = async () => {
    const q = query(collection(db, "customers"), where("username", "==", data.username),where("password", "==", data.password) );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }

  useEffect(()=>console.log(data),[data])

  return (
    <View style={AuthStyles.container}>
      <Text style={AuthStyles.heading}>Customer Login</Text>
      <View style={AuthStyles.inputContainer}>
        <FontAwesome name="user" color="black" size={26} />
        <TextInput
          style={AuthStyles.input}
          placeholder="Username"
          value={data.username}
          onChange={(text) => {
            setData({
              ...data,
              username: text,
            });
          }}
        />
      </View>
      <View style={AuthStyles.inputContainer}>
        <FontAwesome name="lock" color="black" size={26} />
        <TextInput
          style={AuthStyles.input}
          placeholder="Password"
          value={data.password}
          onChangeText={(text) => {
            setData({
              ...data,
              password: text,
            });
          }}
        />
      </View>
      <TouchableOpacity style={AuthStyles.Button}>
        <Text style={AuthStyles.ButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomerLogin;
