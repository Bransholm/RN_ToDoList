import { StyleSheet } from "react-native";

const nativeStyles = StyleSheet.create({
  // The classic container for page setup
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingLeft: 10,
    paddingTop: 35,
  },
  // The background for a note
  noteContainer: {
    backgroundColor: "#C79100",
    padding: 20,
    width: 280,
    minHeight: 240,
    borderWidth: 2,
    borderColor: "#777",
    marginTop: 5,
    marginBottom: 5,
  },
  // Text for a note
  noteText: {
    color: "#fff",
    paddingBottom: 2,
    fontSize: 16,
    fontStyle: "italic",
  },
  // Button
  button: {
    backgroundColor: "#1E90FF",
    borderWidth: 2,
    borderColor: "#fff",
    width: 280,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  // Button text
  buttonText: {
    color: "#fff",
    fontWeight: 600,
  },
});

export default nativeStyles;