import { Pressable, Text, StyleSheet } from "react-native";

const StandardButton = ({
    title,
    onPress,
    backgroundColor = "#1E90FF",
    borderColor = "#fff",
    textColor = "#fff",
}) => {
    return (
        <Pressable style={[styles.button, { backgroundColor: backgroundColor, borderColor: borderColor, }]} onPress={onPress}>
            <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
  // Button
  button: {
    borderWidth: 2,
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
    fontWeight: 600,
  },
});

export default StandardButton;