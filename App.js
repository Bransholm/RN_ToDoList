import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TextInput, FlatList } from "react-native";
import { useState, useEffect } from "react";
import notesData from "./notesData.json"

export default function App() {

  // UseState for the input a new todo
  const [text, setText] = useState("");
  // UseState for the notes list
  const [notes, setNotes] = useState(notesData);

  // Console.log notes for each render
  useEffect(() => {
    console.log("Updated notes:", notes);
  }, [notes]);

  // Button handler for creating an new task
  const createTaskButtonHandler = () => {
    if (text.trim().length > 0) {
      setNotes([...notes, { key: notes.length + 1, name: text }]);
      setText("");
      }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.headLine}>Todo list - Keep track of your tasks</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(txt) => setText(txt)}
        value={text}
        placeholder="Enter task..."
        onSubmitEditing={createTaskButtonHandler}
      />
      <Pressable style={styles.button} onPress={createTaskButtonHandler}>
        <Text style={styles.buttonText}>Create task</Text>
      </Pressable>
      <FlatList
        data={notes}
        renderItem={(note) => (
          <Text style={styles.noteText}>{note.item.key}. {note.item.name}</Text>
        )}
      />

      <StatusBar style="auto" />
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
  headLine: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "#fff",
    color: "#1E90FF",
    width: 200,
    //marginBottom: 10,
    borderRadius: 10,
    padding: 5,
    fontWeight: 600,
    borderColor: "#1E90FF",
    borderWidth: 2,
  },
  button: {
    backgroundColor: "#1E90FF",
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: 600,
  },
  noteText: {
    color: "#fff",
    paddingBottom: 2,
  },
});
