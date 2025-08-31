import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import BackButton from "../components/BackButton";
import TimeInput from "../components/TimeInput";
import NextButton from "../components/NextButton";
import logoImage from "../assets/logoImage.jpg";
import { useApontamentoStore } from "../store/useApontamentoStore";

export default function Index() {
  const [inputValue, setInputValue] = useState("");
  const { adicionarCampo, concluirApontamento } = useApontamentoStore();

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

      <View style={{ ...styles.body, flex: 1 }}>
        <TimeInput inputValue={inputValue} setInputValue={setInputValue} />
      </View>
      <View
        style={{
          ...styles.body,
          flex: 2,
          borderColor: "red",
          borderWidth: 3,
        }}
      >
        <Text>Campo de observação</Text>
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
          route={"/Select2Atividade"}
          onBeforeNavigate={() => {
            adicionarCampo({
              time: inputValue,
            });
            concluirApontamento();
          }}
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
