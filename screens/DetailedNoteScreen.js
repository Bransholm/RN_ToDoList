import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import nativeStyles from "../nativeStyles";
import StandardButton from "../components/buttons";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../firebase";

export default function DetailedNoteScreen({ route, navigation }) {
  const { note, noteIndex, setNotes } = route.params;
  const [editedText, setEditedText] = useState(note.text)

  const saveChangesHandler = () => {
    updateDoc(doc(database, "notes", note.id), {
      text: editedText
    });
    navigation.goBack();
    console.log("Saved note", editedText);
  };


    return (
      <View style={nativeStyles.container}>
        <View style={nativeStyles.noteContainer}>
          <TextInput
            style={nativeStyles.noteText}
            value={editedText}
            onChangeText={setEditedText}
            multiline={true}
          />
        </View>
        <StandardButton title="Save changes" onPress={saveChangesHandler} />
        <StandardButton title="Go back" onPress={() => navigation.goBack()} />
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

