import { useState } from "react";
import { TextInput, View } from "react-native";
import nativeStyles from "../nativeStyles";
import StandardButton from "../components/buttons";

export default function DetailedNoteScreen({ route, navigation }) {
  const { note } = route.params;
  const [editedText, setEditedText] = useState(note.text)

  const saveChangesHandler = () => {
    updateDoc(doc(database, "notes", note.id), {
      text: editedText
    });
    navigation.goBack();
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