import { StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Calendar() {
  return (
    <View
      style={{
        marginBottom: 40,
        width: "100%",
        alignItems: "center",
      }}
    >
      <DateTimePicker
        value={new Date()}
        fullscreen={true}
        positiveButton={{ label: "OK", textColor: "green" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dateComponente: {
    width: 350,
  },
});
