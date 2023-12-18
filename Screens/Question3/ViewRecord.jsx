import React, { useEffect, useState } from "react";
import { AuthStyles } from "../../Styles/Auth.Style";
import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("assig.db");

const ViewRecord = ({ route }) => {
  const { id } = route.params;

  const [data, setData] = useState({
    id: "",
    name: "",
    age: "",
    address: "",
  });

  const getRecord = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM student WHERE uid = ?",
        [id],
        (tx, results) => {
            console.log("results", results.rows.item(0));
          var len = results.rows.length;
          if (len > 0) {
            setData({
              ...data,
              id: results.rows.item(0).uid,
              name: results.rows.item(0).name,
              age: results.rows.item(0).age,
              address: results.rows.item(0).address,
            });
          } else {
            alert("No user found");
            setData({
              ...data,
              id: "",
              name: "",
              age: "",
              address: "",
            });
          }
        }
      );
    });
  };

  useEffect(() => {
    console.log("id", id);  
    getRecord(id);
  }, []);

  return <View style={AuthStyles.container}>
        <View style={AuthStyles.form}>
            <Text style={AuthStyles.heading}>View Record</Text>
            <TextInput style={AuthStyles.input} label="Name" value={data.name} />
            <TextInput style={AuthStyles.input} label="Age" value={data.age} />
            <TextInput style={AuthStyles.input} label="Address" value={data.address} />
        </View>
  </View>;
};

export default ViewRecord;
