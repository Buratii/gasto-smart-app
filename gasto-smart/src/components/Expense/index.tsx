import { View, Animated, GestureResponderEvent } from "react-native";
import { useRef, useState, useEffect } from "react";
import { ExpenseResponse } from "@store/expense/expense.validation";
import { styles } from "./styles";
import { useExpenseContext } from "./ExpenseProvider";
import { ExpenseContent } from "./ExpenseContent";
import { DeleteButton } from "./DeleteButton";
import { ConfirmDeleteModal } from "./DeleteModal";

interface ExpenseProps {
  expense: ExpenseResponse;
  onDelete?: (id: string) => void;
}

export default function Expense({ expense, onDelete }: ExpenseProps) {
  const { openExpenseId, setOpenExpenseId } = useExpenseContext();
  const isOpen = openExpenseId === expense._id;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isOpen ? -70 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const handleLongPress = (e: GestureResponderEvent) => {
    e.stopPropagation();
    setOpenExpenseId(isOpen ? null : expense._id);
  };

  const handleDeletePress = (e: GestureResponderEvent) => {
    e.stopPropagation();
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete?.(expense._id);
    setShowConfirmModal(false);
    setOpenExpenseId(null);
  };

  return (
    <View style={styles.wrapper}>
      <ExpenseContent
        expense={expense}
        slideAnim={slideAnim}
        onPress={() => setOpenExpenseId(null)}
        onLongPress={handleLongPress}
      />
      <DeleteButton onPress={handleDeletePress} />
      <ConfirmDeleteModal
        visible={showConfirmModal}
        expenseName={expense.name}
        amount={expense.amount}
        onCancel={() => setShowConfirmModal(false)}
        onConfirm={handleConfirmDelete}
      />
    </View>
  );
}
