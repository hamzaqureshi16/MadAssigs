import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./Navigation/AuthNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import StudentInfoSystem from "./Navigation/StudentInfoSystem";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Nav from "./Screens/Assign2/Nav";

export default function App() {
  const setItem = async () => {
    try {
      await AsyncStorage.setItem(
        "admin",
        JSON.stringify({
          username: "admin",
          password: 123,
        })
      );

      console.log("Data successfully saved");
      console.log(JSON.parse(await AsyncStorage.getItem("admin")));
    } catch (error) {}
  };

  useEffect(() => {
    setItem();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
    </Provider>
  );
}
