import { StyleSheet, Text, View, Pressable } from "react-native";

export default function DetailedNoteScreen({ route, navigation }) {
    const { note } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.detailText}>{note.name}</Text>
            <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Back to the Todo List</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
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

