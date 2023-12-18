import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { AuthStyles } from "../../Styles/Auth.Style";
import { FirstContext } from "../../Contexts/Auth";

const Screen2 = ({ navigation }) => {
  const Context = useContext(FirstContext);
  const [name, setName] = useState("");
  const [registration, setRegistration] = useState("");

  const reset = () => (setName(""), setRegistration(""));
  const Validate = (name, registration) => {
    if (name === "" || registration === "") {
      alert("Please fill all the fields");
    } else {
      Context.setDetails(name, registration);
      reset();
      navigation.navigate("screen1");
    }
  };

  const setDetails = (name, registration) => Validate(name, registration);

  return (
    <View style={AuthStyles.container}>
      <Text style={AuthStyles.heading}>Screen2</Text>

      <TextInput
        style={AuthStyles.input}
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={AuthStyles.input}
        label="Registration"
        value={registration}
        onChangeText={(text) => setRegistration(text)}
      />

      <Text style={AuthStyles.heading}>Existing Values</Text>
      <Text style={AuthStyles.text}>
        Name: {Context.name === "" ? "{null}" : Context.name}
      </Text>
      <Text style={AuthStyles.text}>
        Registration:{" "}
        {Context.registration === "" ? "{null}" : Context.registration}
      </Text>

      <Button
        style={AuthStyles.Button}
        onPress={() => setDetails(name, registration)}
      >
        <Text style={AuthStyles.ButtonText}>Update Context</Text>
      </Button>
    </View>
  );
};

export default Screen2;
