import React from "react";
import MyHeader from "../../Components/MyHeader";
import { View, FlatList } from "react-native";
import { AuthStyles } from "../../Styles/Auth.Style";
import { Text, Button, TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";

const StudentHome = () => {
  const [courses, setCourses] = React.useState([]);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    AsyncStorage.getItem("courses").then((res) => {
      if (res) {
        const data = JSON.parse(res);
        console.log(data);
        setCourses(data);
      }
    });
  }, []);

  const searchCourse = (txt) => {
    if(txt === ""){
      reset();
      return;
    }
    setSearch(txt);
    const data = courses.filter((item) => item.title === search);
    setCourses(data);
  };

  const reset = () => {
    setSearch("");
    AsyncStorage.getItem("courses").then((res) => {
      if (res) {
        const data = JSON.parse(res);
        console.log(data);
        setCourses(data);
      }
    });
  };

  const renderItem = ({ item }) => (
    <View style={AuthStyles.card}>
      <Text style={AuthStyles.heading}>Title: {item.title}</Text>
      <Text style={AuthStyles.heading}>ID: {item.id}</Text>
    </View>
  );
  return (
    <>
      <MyHeader />
      <View style={AuthStyles.container}>
        <Text style={AuthStyles.heading}>Home</Text>
        <Ionicons
          name="reload"
          size={24}
          color="white"
          backgroundColor="blue"
          padding={10}
          margin={10}
          borderRadius={10}
          onPress={() => reset()}
        />

        <TextInput
          label="Search"
          value={search}
          onChangeText={(text) => searchCourse(text)}
          style={[AuthStyles.input]}
        />
        <FlatList
          data={courses}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />


      </View>
    </>
  );
};

export default StudentHome;
