import {
  Modal,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import Text from "../Text";
import { styles } from "./styles";
import { centsToAmount } from "utils/centsToAmount";
import Button from "@components/Button";
import { MaterialIcons } from "@expo/vector-icons";

interface ConfirmDeleteModalProps {
  visible: boolean;
  expenseName: string;
  amount: number;
  onCancel: () => void;
  onConfirm: () => void;
}

export function ConfirmDeleteModal({
  visible,
  expenseName,
  amount,
  onCancel,
  onConfirm,
}: ConfirmDeleteModalProps) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={onCancel}
                style={styles.closeButton}
              >
                <MaterialIcons name="close" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.modalText}>
                Deseja excluir o registro{" "}
                <Text style={{ fontWeight: 700 }}>{expenseName}</Text> no valor
                de{" "}
                <Text style={{ fontWeight: 700 }}>
                  R${centsToAmount(amount / 100, 2)}
                </Text>
                ?
              </Text>
              <View style={styles.modalButtons}>
                <Button
                  onPress={onCancel}
                  style={[styles.modalButton, styles.cancelButton]}
                  textStyle={styles.cancelButtonText}
                >
                  Cancelar
                </Button>
                <Button
                  onPress={onConfirm}
                  style={[styles.modalButton, styles.deleteModalButton]}
                >
                  Deletar
                </Button>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
