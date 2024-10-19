import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TextInput, FlatList } from "react-native";
import { useState, useEffect } from "react";
import notesData from "../notesData.json"

export default function TodoListScreen({navigation}) {

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
    };

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
      <View style={styles.noteContainer}>
        <FlatList
          data={notes}
          renderItem={(note) => {
            const displayText =
              note.item.name.length > 25
                ? `${note.item.name.substring(0, 25)}...`
                : note.item.name;
            return (
              <Pressable
                style={{ alignSelf: "flex-start" }}
                onPress={() =>
                  navigation.navigate("Details", { note: note.item })
                }
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={[styles.noteText, { width: 25 }]}>
                    {note.item.key}.
                  </Text>
                  <Text style={styles.noteText}>{displayText}</Text>
                </View>
              </Pressable>
            );
          }}
        />
      </View>

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
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: 600,
  },
  noteContainer: {
    backgroundColor: "#FBC02D",
    padding: 20,
    width: 280,
    borderWidth: 2,
    borderColor: "#777",
    marginBottom: 10,
  },
  noteText: {
    color: "#fff",
    paddingBottom: 2,
    fontSize: 16,
    fontStyle: "italic",
  },
});
