import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { AuthStyles } from "../../Styles/Auth.Style";
import { FontAwesome } from "@expo/vector-icons";
import {db} from '../../firebase.config';
import { doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    updateDoc,
    deleteDoc
 } from "firebase/firestore";


const SellerLogin = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const login = async () => {
    const q = query(collection(db, "sellers"), where("username", "==", data.username),where("password", "==", data.password));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }
  return (
    <View style={AuthStyles.container}>
      <Text style={AuthStyles.heading}>Seller Login</Text>
      <View style={AuthStyles.inputContainer}>
        <FontAwesome name="user" color="black" size={26} />
        <TextInput
          style={AuthStyles.input}
          placeholder="Username"
          value={data.username}
          onChangeText={(txt) => {
            setData({
              ...data,
              username: txt,
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
          onChangeText={(txt) => {
            setData({
              ...data,
              password: txt,
            });
          }}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={AuthStyles.Button} onPress={login}>
        <Text style={AuthStyles.ButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SellerLogin;
