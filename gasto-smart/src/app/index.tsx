import { FlatList, StyleSheet, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";

import Expense from "@components/Expense";
import Text from "@components/Text";
import Header from "@components/Header";
import { ExpenseProvider } from "@components/Expense/ExpenseProvider";
import Button from "@components/Button";
import CustomBottomSheet from "@components/BottomSheet";
import { Input } from "@components/Input";

import { ExpenseResponse } from "@store/expense/expense.validation";
import expenseMutation from "@store/expense/mutation";
import categoryMutation from "@store/category/mutation";
import { DropdownCategories } from "types/category.interface";

import colors from "themes/colors";

const expenseSchema = z.object({
  category: z.string().min(1, "Selecione uma categoria"),
  amount: z.number().min(1, "Informe o valor"),
  establishment: z.string().min(1, "Informe o estabelecimento"),
});

type ExpenseFormData = z.infer<typeof expenseSchema>;

export default function Index() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { getExpenses, deleteExpense, createExpense } = expenseMutation();
  const { getCategories } = categoryMutation();

  const [expenses, setExepenses] = useState<ExpenseResponse[]>([]);
  const [categories, setCategories] = useState<DropdownCategories[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchExpenses = async () => {
    const response = await getExpenses();

    setExepenses(response);
  };

  const fetchCategories = async () => {
    const categories = await getCategories();

    const formattedCategories = categories.map((category) => ({
      label: category.name,
      value: category._id,
    }));

    setCategories(formattedCategories);
  };

  const handleDeleteExpense = async (id: string) => {
    await deleteExpense(id);
    setExepenses((prev) => prev.filter((expense) => expense._id !== id));
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const filteredExpenses = expenses.filter((expense) => {
    if (!searchQuery.trim()) return true;

    const searchLower = searchQuery.toLowerCase();

    if (expense.name.toLowerCase().includes(searchLower)) return true;

    if (expense.category?.name?.toLowerCase().includes(searchLower))
      return true;

    const amountStr = expense.amount.toString();
    if (amountStr.includes(searchLower)) return true;

    return false;
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(expenseSchema),
  });

  const handleAddExpense = () => {
    bottomSheetRef.current?.expand();
  };

  const onSubmit = async (data: ExpenseFormData) => {
    await createExpense({
      name: data.establishment,
      amount: data.amount,
      category: data.category,
    });

    await fetchExpenses();

    reset();
    bottomSheetRef.current?.close();
  };

  useEffect(() => {
    fetchExpenses();
    fetchCategories();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ExpenseProvider>
        <Header onSearch={handleSearch} searchValue={searchQuery} />
        <FlatList
          data={filteredExpenses}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Expense
              expense={item}
              onDelete={() => handleDeleteExpense(item._id)}
            />
          )}
          ListEmptyComponent={() => (
            <Text>
              Ninguém chegou ainda? {"\n"} Adicione participantes a sua lista de
              presenca
            </Text>
          )}
        />

        <View style={styles.footer}>
          <Button
            onPress={handleAddExpense}
            icon={<MaterialIcons name="add" size={24} color={colors.white} />}
            style={styles.footerButton}
            textStyle={{ marginLeft: 10 }}
          >
            Novo gasto
          </Button>
        </View>
      </ExpenseProvider>

      <CustomBottomSheet
        ref={bottomSheetRef}
        title="Novo gasto"
        style={{ rowGap: 16 }}
      >
        <Controller
          control={control}
          name="category"
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                label="Selecione uma categoria"
                error={errors.category?.message}
              >
                <Input.Dropdown
                  categories={categories}
                  value={value}
                  placeholder="Categorias"
                  onChange={onChange}
                />
              </Input>
            );
          }}
        />

        <Controller
          control={control}
          name="amount"
          render={({ field: { onChange, value } }) => (
            <Input label="Valor" error={errors.amount?.message}>
              <Input.Currency
                value={value / 100}
                onChangeValue={(value) => {
                  const rawValue = Math.round(Number(value) * 100);
                  onChange(rawValue);
                }}
                placeholder="R$ 0,00"
              />
            </Input>
          )}
        />

        <Controller
          control={control}
          name="establishment"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Estabelecimento"
              error={errors.establishment?.message}
            >
              <Input.Default
                onChangeText={onChange}
                value={value}
                placeholder="Mercado, farmácia..."
              />
            </Input>
          )}
        />

        <Button
          onPress={handleSubmit(onSubmit)}
          icon={<MaterialIcons name="check" size={24} color={colors.white} />}
          style={styles.footerButton}
          textStyle={{ marginLeft: 10 }}
        >
          Adicionar gasto
        </Button>
      </CustomBottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
  footer: {
    padding: 32,
    borderTopWidth: 1,
    borderTopColor: "#00000014",
    backgroundColor: colors.white,
  },
  footerButton: {
    borderRadius: 100,
  },
});
