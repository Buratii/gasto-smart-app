import { StyleSheet } from "react-native";
import colors from "themes/colors";

export const styles = StyleSheet.create({
  container: {
    height: 50,
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 24,
    paddingVertical: 4,
    borderColor: colors.border,
    justifyContent: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    fontFamily: "Inter_500Medium",
    color: colors.border,
  },
  leftIconContainer: {
    marginRight: 10,
  },
  rightIconContainer: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderWidth: 0,
    margin: 0,
    fontSize: 16,
    color: colors.textPrimary,
  },
  icon: {
    bottom: 8,
    color: colors.textPrimary,
  },
  placeholderStyle: {
    fontSize: 14,
    color: colors.border,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  error: {
    color: colors.danger,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 24,
  },
  button: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  options: {
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    padding: 10,
    borderRadius: 6,
    maxHeight: 250,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionItem: {
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  selectedItem: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  selectedText: {
    fontWeight: "500",
  },
  separator: {
    height: 4,
  },
  text: {
    fontSize: 15,
    opacity: 0.8,
  },
});
