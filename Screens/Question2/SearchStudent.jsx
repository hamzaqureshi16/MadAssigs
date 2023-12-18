import React, { useEffect, useState } from "react";
import { AuthStyles } from "../../Styles/Auth.Style";
import { View, Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TextInput } from "react-native-paper";

const SearchStudent = ({ navigation }) => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const getStudents = async () => {
    try {
      const users = await AsyncStorage.getItem("students");
      console.log(users);
      if (users) {
        const parsedUsers = JSON.parse(users);
        setStudents(parsedUsers);
      }
    } catch (error) {
      alert(error);
    }
  };

  const Search = (text) => {
    if (text.length === 0) {
      getStudents();
    }
    setSearch(text);
    //search by name then registration
    const filteredStudents = students.filter((student) => {
      return (
        student.name.toLowerCase().includes(text.toLowerCase()) ||
        student.registration.toLowerCase().includes(text.toLowerCase())
      );
    });
    setStudents(filteredStudents);
  };
  useEffect(() => {
    getStudents();
  }, [navigation]); // Add navigation to the dependency array
  return (
    <View style={[AuthStyles.container, { paddingTop: 50 }]}>
      <Text style={AuthStyles.heading}>Search Student</Text>
      <TextInput
        label="Search"
        value={search}
        onChangeText={(text) => Search(text)}
        style={AuthStyles.input}
      />

      <FlatList
        data={students}
        renderItem={({ item }) => (
          <View style={AuthStyles.item}>
            <Icon name="account" size={30} color="white" />
            <Text style={AuthStyles.itemText}>{item.name}</Text>
            <Text style={AuthStyles.itemText}>{item.registration}</Text>
          </View>
        )}
        keyExtractor={(item) => item.registration}
      />
    </View>
  );
};

export default SearchStudent;
