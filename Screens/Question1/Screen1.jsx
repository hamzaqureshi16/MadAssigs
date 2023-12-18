import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AuthStyles } from "../../Styles/Auth.Style";
import { FirstContext } from "../../Contexts/Auth";
import { Button } from "react-native-paper";

const Screen1 = ({navigation}) => {
  const Context = useContext(FirstContext);
  const test = () => {
    Context.setDetails("Hello", "FA20-BCS-041");
    console.log(Context);
  };
  return (
    <View style={AuthStyles.container}>
      <Text style={AuthStyles.heading}>
        NAME IS: {Context.name === "" ? "{null}" : Context.name}
      </Text>
      <Text style={AuthStyles.heading}>
        REGISTRATION IS:{" "}
        {Context.registration === "" ? "{null}" : Context.registration}
      </Text>
    </View>
  );
};

export default Screen1;
