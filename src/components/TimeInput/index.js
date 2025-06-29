import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";

export default function TimeInput() {
  const [inputValue, setInputValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const formatTime = (value) => {
    const clean = value.replace(/\D/g, "").slice(-4); // mantém no máximo 4 dígitos
    const padded = clean.padStart(4, "0");
    const minutes = padded.slice(-2);
    const hours = padded.slice(0, padded.length - 2);
    return `${hours}:${minutes}`;
  };

  const handleChange = (text) => {
    const onlyNumbers = text.replace(/\D/g, "");
    setInputValue(onlyNumbers);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.timeBox}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.timeText}>{formatTime(inputValue)}</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            <Text style={styles.label}>Digite o tempo:</Text>
            <Text style={styles.timeDisplay}>{formatTime(inputValue)}</Text>
            <TextInput
              style={styles.hiddenInput}
              keyboardType="number-pad"
              autoFocus
              maxLength={4}
              value={inputValue}
              onChangeText={handleChange}
            />
            <Pressable
              onPress={() => setModalVisible(false)}
              style={styles.btnClose}
            >
              <Text style={styles.btnCloseText}>OK</Text>
            </Pressable>
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
    justifyContent: "center",
  },
  timeBox: {
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 8,
    padding: 12,
    width: 120,
    alignItems: "center",
  },
  timeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "#000000aa",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 24,
    width: 250,
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  timeDisplay: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
  },
  hiddenInput: {
    height: 0,
    width: 0,
    opacity: 0,
  },
  btnClose: {
    marginTop: 12,
    backgroundColor: "#2196F3",
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  btnCloseText: {
    color: "white",
    fontSize: 16,
  },
});
