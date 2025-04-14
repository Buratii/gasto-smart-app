import { createContext, useContext, useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";

interface ExpenseProviderProps {
  children: React.ReactNode;
}

export const ExpenseContext = createContext({
  openExpenseId: null as string | null,
  setOpenExpenseId: (id: string | null) => {},
});

export function ExpenseProvider({ children }: ExpenseProviderProps) {
  const [openExpenseId, setOpenExpenseId] = useState<string | null>(null);

  return (
    <ExpenseContext.Provider value={{ openExpenseId, setOpenExpenseId }}>
      <TouchableWithoutFeedback onPress={() => setOpenExpenseId(null)}>
        <View style={{ flex: 1 }}>{children}</View>
      </TouchableWithoutFeedback>
    </ExpenseContext.Provider>
  );
}

export const useExpenseContext = () => useContext(ExpenseContext);
