import { StyleSheet } from "react-native";
import colors from "themes/colors";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 16,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButton: {
    backgroundColor: "#A9A9A9",
    elevation: 0,
  },
  title: {
    fontSize: 16,
    color: colors.white,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingIndicator: {
    color: colors.white,
  },
});
