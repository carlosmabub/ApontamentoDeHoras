import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import logoImage from "../assets/logoImage.jpg";
import ModalSelector from "../components/ModalSelector";
import { useApontamentoStore } from "../store/useApontamentoStore";

const operacao = ["Solda", "Mecanica", "Pintura"];

const equipamento = ["GT440", "GT125", "FT200DF"];

export default function Index() {
  const [operacaoSelected, setOperacaoSelected] = useState("");
  const [equipamentoSelected, setEquipamentoSelected] = useState("");
  const { adicionarCampo } = useApontamentoStore();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logoImage} />
        <Text style={styles.text}>Sistema de apontamento de horas</Text>
      </View>

      <View style={styles.body}>
        <ModalSelector
          setValue={setOperacaoSelected}
          data={operacao}
          value={operacaoSelected}
          text={"Selecione a Operação:"}
        />
        <ModalSelector
          setValue={setEquipamentoSelected}
          data={equipamento}
          value={equipamentoSelected}
          text={"Selecione o Equipamento:"}
        />
      </View>

      <View
        style={{
          ...styles.footer,
          backgroundColor: "#FDFEFF",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <BackButton placeholder={"Voltar"} style={styles.button} />
        <NextButton
          placeholder={"Continuar"}
          style={styles.button}
          route={"/Select4Hours"}
          onBeforeNavigate={() =>
            adicionarCampo({
              operacao: operacaoSelected,
              equipamento: equipamentoSelected,
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFEFF",
    alignItems: "center",
    width: "100%",
  },
  body: {
    flex: 1,
    backgroundColor: "#FDFEFF",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    fontSize: 18,
    fontStyle: "italic",
  },
  header: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FDFEFF",
  },
  footer: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FDFEFF",
  },
  logo: {
    width: 75,
    height: 75,
  },
  button: {
    backgroundColor: "#FDFEFF",
    borderColor: "black",
    borderWidth: 1,
    width: 150,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  dropdown: {
    width: "90%",
    margin: 30,
  },
});
