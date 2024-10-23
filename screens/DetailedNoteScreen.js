import { StyleSheet, Text, View, Pressable } from "react-native";
import nativeStyles from "../nativeStyles";
import StandardButton from "../components/buttons";

export default function DetailedNoteScreen({ route, navigation }) {
    const { note } = route.params;

    return (
      <View style={nativeStyles.container}>
        <View style={nativeStyles.noteContainer}>
          <Text style={nativeStyles.noteText}>{note.name}</Text>
        </View>
        <StandardButton
          title="Back to the Todo List"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingLeft: 10,
    paddingTop: 35,
  },
  detailText: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

