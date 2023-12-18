import React, { useState } from "react";
import MyHeader from "../../Components/MyHeader";
import { AuthStyles } from "../../Styles/Auth.Style";
import { Text, Button, TextInput } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const RegisterCourses = () => {
  const navigation = useNavigation();
  const [data, setData] = React.useState({
    id: "",
    title: "",
  });

  const reset = () => {
    setData({
      id: "",
      title: "",
    });
  };

  const register = () => {
    AsyncStorage.getItem("courses").then((res) => {
      if (res) {
        const dataArr = JSON.parse(res);
        
        dataArr.push(data);
        AsyncStorage.setItem("courses", JSON.stringify(dataArr));
      } else {
        AsyncStorage.setItem("courses", JSON.stringify([data]));
      }
    });
    reset();
    navigation.navigate("StudentHome");
  };

  const dta = [
    { label: "OOP", value: "CSC221" },
    { label: "DSA", value: "CSC122" },
    { label: "DCCN", value: "CSC342" },
    { label: "OS", value: "CSC143" },
    { label: "MAD", value: "CSC565" },
    { label: "PDC", value: "CSC116" },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      <MyHeader />
      <View style={AuthStyles.container}>
        <Text style={AuthStyles.heading}>Register Courses</Text>
      </View>
      <View>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dta}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select item" : "..."}
          searchPlaceholder="Search..."
          value={data.id}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setData({
              id: item.value,
              title: item.label,
            });
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? "blue" : "black"}
              name="Safety"
              size={20}
            />
          )}
        />

        <Button
          mode="contained"
          style={AuthStyles.btn}
          onPress={() => register()}
        >
          Register
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
export default RegisterCourses;
