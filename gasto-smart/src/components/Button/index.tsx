import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  ActivityIndicator,
  View,
} from "react-native";
import { styles } from "./styles";
import { ReactNode } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Text from "../Text";

interface ButtonProps {
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  children?: ReactNode;
}

export default function Button({
  children,
  style,
  textStyle,
  disabled,
  onPress,
  icon,
  iconPosition = "left",
  loading = false,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={styles.loadingIndicator.color} size="small" />
      ) : (
        <View style={styles.buttonContent}>
          {icon && iconPosition === "left" && <View>{icon}</View>}
          <Text style={[styles.title, textStyle]}>{children}</Text>
          {icon && iconPosition === "right" && <View>{icon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
}
