import { View, Text } from "react-native";
import { styles } from "../styles";

const USERS = [
  {
    name: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
  },
  {
    name: "Alice",
    lastName: "Smith",
    email: "asmith@example.com",
  },
  {
    name: "Michael",
    lastName: "Johnson",
    email: "michaelj@example.com",
  },
  {
    name: "Emma",
    lastName: "Brown",
    email: "emma.brown@example.com",
  },
  {
    name: "David",
    lastName: "Lee",
    email: "davidlee@example.com",
  },
];

export default function UsersList() {
  return (
    <View
      style={{ ...styles.container, alignItems: "flex-start", padding: 24 }}
    >
      <View>
        {USERS.map((user) => (
          <View style={{ marginBottom: 8 }} key={user.email}>
            <Text>
              {user.name} {user.lastName} | {user.email}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
