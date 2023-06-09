import { View } from "react-native";
import { Link } from "@react-navigation/native";
import { styles } from "../styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Link style={styles.link} to="/Register">
          Cadastrar usuário
        </Link>
      </View>
    </View>
  );
}
