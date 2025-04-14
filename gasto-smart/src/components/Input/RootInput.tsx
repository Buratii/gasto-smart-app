import Text from "@components/Text";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  View,
} from "react-native";
import { styles } from "./styles";
import {
  useState,
  ReactElement,
  cloneElement,
  isValidElement,
  ReactNode,
} from "react";
import colors from "themes/colors";

interface InputChildProps {
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

interface RootInputProps {
  label?: string;
  children: ReactElement<InputChildProps>;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function Root({
  children,
  label,
  error,
  leftIcon,
  rightIcon,
}: RootInputProps) {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setIsFocus(false);

  const childWithProps = isValidElement(children)
    ? cloneElement(children, {
        onFocus: (e) => {
          handleFocus();
          children.props.onFocus?.(e);
        },
        onBlur: (e) => {
          handleBlur();
          children.props.onBlur?.(e);
        },
      })
    : children;

  return (
    <View>
      <View
        style={[
          styles.container,
          {
            borderColor: error
              ? colors.danger
              : isFocus
              ? colors.primary
              : colors.border,
            position: "relative",
          },
        ]}
      >
        {label && <Text style={styles.label}>{label}</Text>}

        <View style={styles.iconContainer}>
          {leftIcon && <View style={styles.leftIconContainer}>{leftIcon}</View>}
          {childWithProps}
          {rightIcon && (
            <View style={styles.rightIconContainer}>{rightIcon}</View>
          )}
        </View>
      </View>
    </View>
  );
}
