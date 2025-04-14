import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { forwardRef, useCallback } from "react";

import Text from "@components/Text";
import { styles } from "./styles";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface CustomBottomSheetProps {
  title: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const CustomBottomSheet = forwardRef<BottomSheet, CustomBottomSheetProps>(
  ({ children, title, style }, ref: React.ForwardedRef<BottomSheet>) => {
    const handleClose = () => {
      if (ref && typeof ref === "object") {
        ref.current?.close();
      }
    };

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...props}
        />
      ),
      []
    );
    return (
      <BottomSheet
        ref={ref}
        enableBlurKeyboardOnGesture
        enablePanDownToClose
        enableDynamicSizing={true}
        backdropComponent={renderBackdrop}
        index={-1}
      >
        <BottomSheetView style={[style, styles.container]}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleClose}
              style={styles.closeButton}
            >
              <MaterialIcons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          {children}
        </BottomSheetView>
      </BottomSheet>
    );
  }
);

export default CustomBottomSheet;
