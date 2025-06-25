import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function MyButton({ placeholder, changeState, style }) {
  return (
    <TouchableOpacity style={[style]} onPress={changeState}>
      <Text style={{ fontSize: 18, textAlign: "center" }}>{placeholder}</Text>
    </TouchableOpacity>
  );
}
