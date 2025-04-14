import { Text as RNText, TextProps } from "react-native";
import { styles } from "./styles";

export default function Text({ children, style, ...props }: TextProps) {
  return (
    <RNText style={[styles.text, style]} {...props}>
      {children}
    </RNText>
  );
}
