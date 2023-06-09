import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RegisterUsers from "./pages/RegisterUsers";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{ title: "Login" }}
          component={Login}
        />

        <Stack.Screen
          name="Home"
          options={{ title: "Home" }}
          component={Home}
        />

        <Stack.Screen
          name="Register"
          options={{ title: "Cadastrar usuário" }}
          component={RegisterUsers}
        />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
