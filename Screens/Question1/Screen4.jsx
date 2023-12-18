import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { AuthStyles } from "../../Styles/Auth.Style";
import { SecondContext } from "../../Contexts/SecondContext";

const Screen4 = ({ navigation }) => {
  const Context = useContext(SecondContext);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const reset = () => (setState(""), setCity(""));
  const Validate = (city, state) => {
    if (city === "" || state === "") {
      alert("Please fill all the fields");
    } else {
      Context.setDetails2(city, state);
      reset();
      navigation.navigate("screen3");
    }
  };

  const setDetails = (city, state) => Validate(city, state);

  return (
    <View style={AuthStyles.container}>
      <Text style={AuthStyles.heading}>Screen2</Text>

      <TextInput
        style={AuthStyles.input}
        label="City"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <TextInput
        style={AuthStyles.input}
        label="State"
        value={state}
        onChangeText={(text) => setState(text)}
      />

      <Text style={AuthStyles.heading}>Existing Values</Text>
      <Text style={AuthStyles.text}>
        City: {Context.city === "" ? "{null}" : Context.city}
      </Text>
      <Text style={AuthStyles.text}>
        State:
        {Context.state === "" ? "{null}" : Context.state}
      </Text>

      <Button
        style={AuthStyles.Button}
        onPress={() => setDetails(city, state)}
      >
        <Text style={AuthStyles.ButtonText}>Update Context</Text>
      </Button>
    </View>
  );
};

export default Screen4;
