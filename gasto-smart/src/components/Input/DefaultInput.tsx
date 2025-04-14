import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

export default function DefaultInput({
  value,
  onChange,
  ...props
}: TextInputProps) {
  return <TextInput style={styles.input} {...props} />;
}
