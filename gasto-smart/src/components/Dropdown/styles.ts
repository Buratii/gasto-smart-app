import { StyleSheet } from "react-native";
import colors from "themes/colors";

export const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    paddingHorizontal: 24,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 100,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
