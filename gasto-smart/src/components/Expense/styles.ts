import { StyleSheet } from "react-native";
import colors from "themes/colors";

export const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    flexDirection: "row",
    overflow: "hidden",
    marginBottom: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#0000000A",
  },
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: colors.background,
    zIndex: 1,
  },
  content: {
    paddingHorizontal: 32,
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: colors.iconBackground,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },
  deleteButton: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 24,
    width: "80%",
    maxWidth: 320,
  },
  closeButton: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "transparent",
    padding: 8,
    borderRadius: 100,
    zIndex: 1,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 24,
    maxWidth: "80%",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 8,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: colors.white,
  },
  cancelButtonText: {
    color: colors.textPrimary,
  },
  deleteModalButton: {
    backgroundColor: colors.textPrimary,
    borderRadius: 100,
  },
});
