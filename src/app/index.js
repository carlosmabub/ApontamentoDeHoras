import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Dropdown from "../components/DropDown";
import ConfirmButton from "../components/ConfirmButton";
import logoImage from "../assets/logoImage.jpg";

const data = [
  { key: "1", value: "Fulano" },
  { key: "2", value: "Ciclano" },
];

export default function Index() {
  const [dropDownSelected, setDropDownSelected] = useState("");
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
        <Dropdown
          setValue={setDropDownSelected}
          data={data}
          placeholder={"Selecione o lider"}
          style={styles.dropdown}
        />
      </View>

      <View style={styles.footer}>
        <ConfirmButton
          value={dropDownSelected}
          placeholder={"Continuar"}
          style={styles.button}
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
  },
  footer: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 75,
    height: 75,
  },
  button: {
    padding: 20,
    color: "white",
    borderRadius: 10,
    width: "50%",
  },
  dropdown: {
    width: "90%",
  },
});
