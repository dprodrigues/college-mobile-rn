import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  errorMessage: {
    color: "red",
    fontWeight: 700,
  },
  wrapper: {
    marginBottom: 16,
    width: "80%",
  },
  label: {
    marginBottom: 4,
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    height: 48,
    padding: 8,
  },
  link: {
    textDecorationColor: "#000",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#2e1065",
    borderRadius: 5,
    borderWidth: 0,
    height: 48,
    justifyContent: "center",
    padding: 8,
    paddingLeft: 16,
  },
  buttonText: {
    color: "#fff",
  },
  sidebar__content: {
    backgroundColor: "#fff",
    bottom: 0,
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 23,
    position: "absolute",
    right: 0,
    top: 0,
    width: "80%",
    zIndex: 15,
  },
  sidebar__background: {
    backgroundColor: "#000",
    bottom: 0,
    left: 0,
    opacity: 0.4,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 10,
  },
});
