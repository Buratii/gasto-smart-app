import {
  Animated,
  GestureResponderEvent,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Text from "../Text";
import { styles } from "./styles";
import { ExpenseResponse } from "@store/expense/expense.validation";
import { centsToAmount } from "utils/centsToAmount";

interface Props {
  expense: ExpenseResponse;
  slideAnim: Animated.Value;
  onPress: (e: GestureResponderEvent) => void;
  onLongPress: (e: GestureResponderEvent) => void;
}

export function ExpenseContent({
  expense,
  slideAnim,
  onLongPress,
  onPress,
}: Props) {
  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX: slideAnim }] }]}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onLongPress={onLongPress}
        onPress={onPress}
        style={styles.content}
      >
        <View style={styles.contentLeft}>
          <View style={styles.icon}>
            <MaterialIcons name={expense.category.icon as any} size={16} />
          </View>
          <Text>{expense.name}</Text>
        </View>
        <Text>R${centsToAmount(expense.amount / 100, 2)}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
