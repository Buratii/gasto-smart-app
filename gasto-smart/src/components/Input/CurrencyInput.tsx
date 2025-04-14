import CurrencyInput, { CurrencyInputProps } from "react-native-currency-input";

import { styles } from "./styles";

export default function CustomCurrencyInput({ ...props }: CurrencyInputProps) {
  return (
    <CurrencyInput
      {...props}
      value={props.value}
      onChangeValue={props.onChangeValue}
      prefix="R$"
      delimiter="."
      keyboardType="numeric"
      separator=","
      precision={2}
      style={styles.input}
    />
  );
}
