import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RegisterUsers from "./pages/RegisterUsers";
import UsersList from "./pages/UsersList";
import Institutional from "./pages/Institutional";

const Stack = createNativeStackNavigator();

export default function App() {
  const [open, setOpen] = useState(false);

  const HeaderButton = () => (
    <TouchableOpacity onPress={() => setOpen(true)}>
      <Text>Menu</Text>
    </TouchableOpacity>
  );

  const withSidebar = (Component) => (props) => {
    return (
      <>
        <Component {...props} />

        <Sidebar open={open} setOpen={setOpen} />
      </>
    );
  };

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
          options={{
            title: "Home",
            headerRight: HeaderButton,
          }}
          component={withSidebar(Home)}
        />

        <Stack.Screen
          name="Register"
          options={{ title: "Cadastrar usuário", headerRight: HeaderButton }}
          component={withSidebar(RegisterUsers)}
        />

        <Stack.Screen
          name="List"
          options={{ title: "Lista de usuários", headerRight: HeaderButton }}
          component={withSidebar(UsersList)}
        />

        <Stack.Screen
          name="Institutional"
          options={{ title: "Institucional", headerRight: HeaderButton }}
          component={withSidebar(Institutional)}
        />
      </Stack.Navigator>

      <Sidebar open={open} setOpen={setOpen} />

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
