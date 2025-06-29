import { Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useApontamentoStore } from "../../store/useApontamentoStore";

export default function NextButton({
  placeholder,
  style,
  onBeforeNavigate,
  route,
}) {
  const router = useRouter();
  const { apontamentos, apontamentoAtual } = useApontamentoStore();

  const handlePres = () => {
    if (onBeforeNavigate) {
      onBeforeNavigate();
      console.log("Apontamento: ", apontamentos);
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
