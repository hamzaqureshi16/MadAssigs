import React, { useEffect } from "react";
import { AuthStyles } from "../../Styles/Auth.Style";
import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as SQLite from "expo-sqlite";
import { useNavigation } from "@react-navigation/native";

const db = SQLite.openDatabase("assig.db");

const SearchActivity = () => {
  const navigation = useNavigation();
  const dummyData = [
    {
      id: 25,
      name: "Hamza",
      age: 22,
      address: "Lahore",
    },
    {
      id: 26,
      name: "Ali",
      age: 22,
      address: "Lahore",
    },
    {
      id: 27,
      name: "Ahmed",
      age: 22,
      address: "Lahore",
    },
    {
      id: 28,
      name: "Usman",
      age: 22,
      address: "Lahore",
    },
    {
      id: 29,
      name: "Kashif",
      age: 22,
      address: "Lahore",
    },
    {
      id: 30,
      name: "Sajid",
      age: 22,
      address: "Lahore",
    },
    {
      id: 31,
      name: "Khalid",
      age: 22,
      address: "Lahore",
    },
    {
      id: 32,
      name: "Nasir",
      age: 22,
      address: "Lahore",
    },
    {
      id: 33,
      name: "Waqas",
      age: 22,
      address: "Lahore",
    },
    {
      id: 34,
      name: "Naveed",
      age: 22,
      address: "Lahore",
    },
    {
      id: 35,
      name: "Waseem",
      age: 22,
      address: "Lahore",
    },
    {
      id: 36,
      name: "Shahid",
      age: 22,
      address: "Lahore",
    },
    {
      id: 37,
      name: "Sajjad",
      age: 22,
      address: "Lahore",
    },
    {
      id: 38,
      name: "Majid",
      age: 22,
      address: "Lahore",
    },
    {
      id: 39,
      name: "Ahsan",
      age: 22,
      address: "Lahore",
    },
    {
      id: 40,
      name: "Noman",
      age: 22,
      address: "Lahore",
    },
    {
      id: 41,
      name: "Rizwan",
      age: 22,
      address: "Lahore",
    },
    {
      id: 42,
      name: "Raza",
      age: 22,
      address: "Lahore",
    },
    {
      id: 43,
      name: "Adeel",
      age: 22,
      address: "Lahore",
    },
    {
      id: 44,
      name: "Sohail",
      age: 22,
      address: "Lahore",
    },
    {
      id: 45,
      name: "Zahid",
      age: 22,
      address: "Lahore",
    },
    {
      id: 46,
      name: "Zain",
      age: 22,
      address: "Lahore",
    },
  ];
  const [search, setSearch] = React.useState("");
  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS student (id INTEGER PRIMARY KEY AUTOINCREMENT, uid INTEGER , name TEXT, age INTEGER, address TEXT);",
        null,
        (txObj, resultSet) => {},
        (txObj, error) => console.log("Error", error)
      );
    });
  };

  const insertData = () => {
    dummyData.map((item) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO student (uid,name, age, address) VALUES (?,?, ?, ?)",
          [item.id,item.name, item.age, item.address],
          (txObj, resultSet) => {},
          (txObj, error) => console.log("Error", error)
        );
      });
    });
  };

  const readData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM student",
        null,
        (txObj, resultSet) => {
          console.log(resultSet.rows);
        },
        (txObj, error) => console.log("Error", error)
      );
    });
  };

  const truncate = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE STUDENT",
        null,
        (txObj, resultSet) => {console.log('DONE');},
        (txObj, error) => console.log("Error", error)
      );
    });
  }

  useEffect(() => {
    createTable();
    // insertData();
  }, []);

  return <View style={AuthStyles.container}>
    <TextInput
      label="Search by ID"
      value={search}
      onChangeText={(text) => setSearch(text)}
      style={{ width: "90%", marginBottom: 20 }}
    />
    <Button
      mode="contained"
      onPress={() => {
        // truncate()
        navigation.navigate("ViewRecord", { id: search });
        setSearch('')
      }}
    >
      <Text style={{ color: "white" }}>Search</Text>
    </Button>
  </View>;
};

export default SearchActivity;
