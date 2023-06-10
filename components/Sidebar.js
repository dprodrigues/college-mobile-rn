import { Modal, View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import { Link } from "@react-navigation/native";

export default function Sidebar({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={handleClose}
    >
      <View style={styles.sidebar__background}></View>

      <View style={styles.sidebar__content}>
        <View style={{ marginBottom: 32 }}>
          <TouchableOpacity onPress={handleClose}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Link
            to="/Home"
            style={{ ...styles.link, marginBottom: 16 }}
            onPress={handleClose}
          >
            Home
          </Link>

          <Link
            to="/List"
            style={{ ...styles.link, marginBottom: 16 }}
            onPress={handleClose}
          >
            Lista de usuários
          </Link>

          <Link to="/Institutional" style={styles.link} onPress={handleClose}>
            Institucional
          </Link>
        </View>

        <View></View>
      </View>
    </Modal>
  );
}
