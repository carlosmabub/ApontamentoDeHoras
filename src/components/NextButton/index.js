import { Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function NextButton({ placeholder, style, route, params }) {
  const router = useRouter();
  return (
    <Pressable
      style={style}
      onPress={() => router.push({ pathname: route, params })}
    >
      <Text style={{ fontSize: 18, textAlign: "center" }}>{placeholder}</Text>
    </Pressable>
  );
}
