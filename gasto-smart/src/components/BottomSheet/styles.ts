import { StyleSheet } from "react-native";
import colors from "themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 32,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: 16,
  },
  closeButton: {
    backgroundColor: "transparent",
    padding: 8,
    borderRadius: 100,
    zIndex: 1,
  },
});
