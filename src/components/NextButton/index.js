import { Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function NextButton({ placeholder, style }) {
  const router = useRouter();
  return (
    <Pressable style={style} onPress={() => router.push("/colaborador")}>
      <Text style={{ fontSize: 18, textAlign: "center" }}>{placeholder}</Text>
    </Pressable>
  );
}
