import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "react-native/Libraries/NewAppScreen";
import { View, Text } from "react-native";

const MyHeader = () => {
  const Auth = useSelector((state) => state.Auth);
  const dispatch = useDispatch();

  return (
    <>
      <View
        style={{
          backgroundColor: "#f4511e",
          height: 100,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
            marginRight: 10,
          }}
        >
          {Auth.User.registration}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          {Auth.User.username}
        </Text>
      </View>
    </>
  );
};

export default MyHeader;
