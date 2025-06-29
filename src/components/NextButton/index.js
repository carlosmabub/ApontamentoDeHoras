import { Text, Pressable, onPress } from "react-native";
import { useRouter } from "expo-router";
import { useApontamentoStore } from "../../store/useApontamentoStore";

export default function NextButton({
  placeholder,
  style,
  onBeforeNavigate,
  route,
}) {
  const router = useRouter();

  const handlePres = () => {
    if (onBeforeNavigate) {
      onBeforeNavigate();
      console.log(useApontamentoStore.apontamentos);
      console.log(useApontamentoStore.apontamentoAtual);
    }
    if (route) {
      router.push(route);
    }
  };
  return (
    <Pressable style={style} onPress={handlePres}>
      <Text style={{ fontSize: 18, textAlign: "center" }}>{placeholder}</Text>
    </Pressable>
  );
}
