import { useState } from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";
import logoImage from "../assets/logoImage.jpg";
import ModalSelector from "../components/ModalSelector";
import { useApontamentoStore } from "../store/useApontamentoStore";

const atividades = ["Produção", "Retrabalho", "DDS"];

export default function ColaboradorScreen() {
  const [atividadeSelecionada, setAtividadeSelecionada] = useState(null);
  const { adicionarCampo } = useApontamentoStore();
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#FDFEFF" translucent={false} />
      <View style={styles.header}>
        <Image style={styles.logo} source={logoImage} />
        <Text style={styles.text}> Sistema de apontamento de horas </Text>
      </View>
      <View
        style={{
          ...styles.body,
          borderColor: "red",
          borderWidth: 3,
          flex: 2,
          padding: 20,
        }}
      >
        <Text style={styles.text}></Text>
      </View>
      <View
        style={{
          ...styles.body,
          justifyContent: "center",
        }}
      >
        <ModalSelector
          setValue={setAtividadeSelecionada}
          data={atividades}
          value={atividadeSelecionada}
          text={"Selecione a Atividade:"}
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
        <BackButton
          placeholder={"Concluir"}
          style={styles.button}
          route={"/index"}
        />
        <NextButton
          placeholder={"Continuar"}
          style={styles.button}
          route={"/hoursAppointment"}
          onBeforeNavigate={() =>
            adicionarCampo({
              atividade: atividadeSelecionada,
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
  logo: {
    width: 75,
    height: 75,
  },
  container: {
    flex: 1,
    backgroundColor: "#FDFEFF",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  body: {
    backgroundColor: "#FDFEFF",
    flex: 1,
    alignItems: "center",
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
  dropdown: {
    width: "90%",
    margin: 30,
  },
});
