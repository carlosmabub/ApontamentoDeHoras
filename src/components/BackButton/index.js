import { Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function BackButton({ placeholder, style }) {
  const router = useRouter();
  return (
    <Pressable style={style} onPress={() => router.back()}>
      <Text style={{ fontSize: 18, textAlign: "center" }}>{placeholder}</Text>
    </Pressable>
  );
}
