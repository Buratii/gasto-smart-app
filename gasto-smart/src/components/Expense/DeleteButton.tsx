import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

interface Props {
  onPress: (e: any) => void;
}

export function DeleteButton({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.deleteButton} onPress={onPress}>
      <MaterialIcons name="delete" size={24} color="white" />
    </TouchableOpacity>
  );
}
