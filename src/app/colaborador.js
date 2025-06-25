import { useState } from "react";
import { StyleSheet, Text, View, Modal, FlatList, Image } from "react-native";
import Dropdown from "../components/DropDown/index";
import Calendar from "../components/Calendar/index";
import ConfirmButton from "../components/ConfirmButton/index";
import logoImage from "../assets/logoImage.jpg";
const colabData = [
  { key: "1", value: "Fulano" },
  { key: "2", value: "Ciclano" },
  { key: "1", value: "Beltrano" },
  { key: "2", value: "Ciclano" },
];

const equipData = [
  { key: "1", value: "44" },
  { key: "2", value: "55" },
  { key: "1", value: "44" },
  { key: "2", value: "55" },
];

const funcionarios = [
  { id: "1", nome: "João" },
  { id: "2", nome: "Maria" },
  { id: "3", nome: "Carlos" },
];

export default function ColaboradorScreen() {
  const [colabDropdownSelected, setColabDropDownSelected] = useState("");
  const [equipDropDownSelected, setEquipDropDownSelected] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ ...styles.box }}>
        <Image style={styles.logo} source={logoImage} />
      </View>

      <View
        style={{
          ...styles.box,
          backgroundColor: "#FFF",
          flex: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ marginTop: 50, margin: 20, fontSize: 16 }}>
          Selecione a data:
        </Text>
        <Calendar margin={6} />
        <Text style={{ marginTop: "", margin: 20, fontSize: 16 }}>
          Selecione o colaborador e o equipamento:
        </Text>
        <Dropdown
          setValue={setColabDropDownSelected}
          data={colabData}
          placeholder={"Selecione o colaborador"}
          margin={6}
          zIndex={3}
        />
        <Dropdown
          setValue={setEquipDropDownSelected}
          data={equipData}
          placeholder={"Selecione o Equipamento"}
          margin={6}
          zIndex={2}
        />
      </View>
      <View
        style={{
          ...styles.box,
          flex: 3,
          backgroundColor: "#FFF",
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 10,
        }}
      >
        <ConfirmButton placeholder="Voltar" />
        <ConfirmButton placeholder="Continuar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
    overflow: "visible",
  },
  box: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 75,
    height: 75,
  },
});
