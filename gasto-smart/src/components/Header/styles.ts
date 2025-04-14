import { StyleSheet } from "react-native";
import colors from "themes/colors";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 24,
    rowGap: 16,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchButton: {
    height: 40,
    width: 40,
    padding: 0,
    paddingLeft: 4,
    backgroundColor: "#252D5029",
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
});
