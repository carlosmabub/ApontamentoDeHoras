import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useRouter } from "expo-router";
import Calendar from "../components/Calendar/index";
import ConfirmButton from "../components/ConfirmButton";
import NextButton from "../components/NextButton";
import logoImage from "../assets/logoImage.jpg";
import ModalSelector from "../components/ModalSelector";
import { useApontamentoStore } from "../store/useApontamentoStore";

const funcionarios = [
  "Ana Clara",
  "Bruno Souza",
  "Carlos Silva",
  "Daniela Lima",
  "Eduardo Gomes",
  "Fernanda Rocha",
  "Gabriel Nunes",
  "Helena Costa",
];

export default function Index() {
  const [colaboradorSelecionado, setColaboradorSelecionado] = useState(null);
  const router = useRouter();
  const { adicionarCampo } = useApontamentoStore();
  return (
    <View
      style={{
        ...styles.container,
        justifyContent: "space-between",
      }}
    >
      <View style={styles.header}>
        <Image style={styles.logo} source={logoImage} />
        <Text style={styles.text}>Sistema de apontamento de horas</Text>
      </View>

      <View style={styles.body}>
        <ModalSelector
          setValue={setColaboradorSelecionado}
          data={funcionarios}
          value={colaboradorSelecionado}
          text={"Selecione o Colaborador:"}
        />
        <Text style={{ textAlign: "center" }}>Selecione a data:</Text>
        <Calendar />
      </View>

      <View style={styles.footer}>
        <ConfirmButton
          placeholder={"Concluir"}
          style={styles.button}
          route={"/"}
        />
        <NextButton
          placeholder={"Continuar"}
          style={styles.button}
          route="/Select2Atividade"
          onBeforeNavigate={() =>
            adicionarCampo({
              colaborador: colaboradorSelecionado,
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: "#FDFEFF",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  logo: {
    width: 75,
    height: 75,
  },
  dropdown: {
    width: "90%",
    margin: 30,
  },
});
