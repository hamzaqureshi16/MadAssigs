import React, { useContext } from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { AuthStyles } from "../../Styles/Auth.Style";
import { SecondContext } from "../../Contexts/SecondContext";

const Screen3 = () => {
  const Context = useContext(SecondContext);
  return (
    <View style={AuthStyles.container}>
      <Text style={AuthStyles.heading}>
        City: {Context.city === "" ? "{null}" : Context.city}
      </Text>
      <Text style={AuthStyles.heading}>
        State: {Context.state === "" ? "{null}" : Context.state}
      </Text>
    </View>
  );
};

export default Screen3;
