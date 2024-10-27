import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TextInput, FlatList } from "react-native";
import { useState, useEffect } from "react";
import notesData from "../notesData.json"
import nativeStyles from "../nativeStyles";
import StandardButton from "../components/buttons";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../firebase";

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
    const createTaskButtonHandler = async () => {
      if (text.trim().length > 0) {
        try {
          await addDoc(collection(database, "notes"), {text: text})
            //setNotes([...notes, { key: notes.length + 1, name: text }]);
          setText("");
          } catch (error) {
          console.error("Error adding Todo to database", error);          
          }
        }
    };

  return (
    <View style={nativeStyles.container}>
      <Text style={styles.headLine}>Todo list - Keep track of your tasks</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(txt) => setText(txt)}
        value={text}
        placeholder="Enter new task..."
        onSubmitEditing={createTaskButtonHandler}
      />
      <StandardButton
        onPress={createTaskButtonHandler}
        title={"Create task"}
      />
      <View style={[nativeStyles.noteContainer, { marginTop: 15 }]}>
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
                  navigation.navigate("Details", {
                    note: note.item,
                    setNotes,
                    noteIndex: note.index
                  })
                }
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={[nativeStyles.noteText, { width: 25 }]}>
                    {note.item.key}.
                  </Text>
                  <Text style={nativeStyles.noteText}>{displayText}</Text>
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
  headLine: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "#fff",
    color: "#1E90FF",
    width: 280,
    borderRadius: 10,
    padding: 5,
    fontWeight: 600,
    borderColor: "#1E90FF",
    borderWidth: 2,
  },
});
