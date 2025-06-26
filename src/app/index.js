import { useState } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Dropdown from "../components/DropDown";
import NextButton from "../components/NextButton";
import logoImage from "../assets/logoImage.jpg";

const data = [
  { key: "1", value: "Fulano" },
  { key: "2", value: "Ciclano" },
];

export default function Index() {
  const [dropDownSelected, setDropDownSelected] = useState("");
  return (
    <SafeAreaView
      style={{
        ...styles.container,
        justifyContent: "space-between",
      }}
    >
      <StatusBar style="dark" backgroundColor="#FDFEFF" translucent={false} />
      <View style={styles.header}>
        <Image style={styles.logo} source={logoImage} />
        <Text style={styles.text}>Sistema de apontamento de horas</Text>
      </View>

      <View style={styles.body}>
        <Dropdown
          setValue={setDropDownSelected}
          data={data}
          placeholder={"Selecione o lider"}
          style={styles.dropdown}
        />
      </View>

      <View style={styles.footer}>
        <NextButton
          placeholder={"Continuar"}
          style={styles.button}
          route={"/colaborador"}
        />
      </View>
    </SafeAreaView>
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
    borderWidth: 2,
    width: 150,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  dropdown: {
    width: "90%",
  },
});
