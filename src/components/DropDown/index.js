import { View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default function Dropdown({
  setValue,
  data,
  placeholder,
  zIndex = 1,
  style,
}) {
  return (
    <View style={[style, zIndex]}>
      <SelectList
        data={data}
        setSelected={setValue}
        placeholder={placeholder}
        boxStyles={{ zIndex: 1 }}
        dropdownStyles={{
          position: "absolute",
          top: 40,
          zIndex: 999,
          elevation: 5,
          width: "100%",
          backgroundColor: "#FDFEFF",
        }}
      />
    </View>
  );
}
