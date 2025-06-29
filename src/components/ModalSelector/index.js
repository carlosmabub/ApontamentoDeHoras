import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";

export default function FuncionarioSelector({
  setValue,
  data,
  placeholder,
  value,
  text,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  const selecionarFuncionario = (nome) => {
    setValue(nome);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.descriptionText}>{text}</Text>
      <TouchableOpacity
        style={styles.selector}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.selectorText}>
          {value || placeholder || "Selecionar"}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione um funcionário</Text>
            <FlatList
              data={data}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.item}
                  onPress={() => selecionarFuncionario(item)}
                >
                  <Text style={styles.itemText}>{item}</Text>
                </Pressable>
              )}
            />
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
    width: "90%",
  },
  selector: {
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: "90%",
  },
  descriptionText: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
  },
  selectorText: {
    fontSize: 16,
    color: "#333",
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "#00000088",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    width: "80%",
    maxHeight: "60%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemText: {
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 16,
    alignSelf: "center",
  },
  cancelText: {
    color: "#007BFF",
    fontSize: 16,
  },
});
