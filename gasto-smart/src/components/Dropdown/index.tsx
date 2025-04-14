import React, { useState } from "react";
import { Text, View } from "react-native";
import { Dropdown as RNDropDown } from "react-native-element-dropdown";
import { DropdownCategories } from "types/category.interface";
import { styles } from "./styles";
import colors from "themes/colors";

interface DropdownProps {
  label: string;
  value: string;
  categories: DropdownCategories[];
  onChange: (value: string) => void;
}

export default function Dropdown({
  categories,
  value,
  onChange,
}: DropdownProps) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View>
      <RNDropDown
        style={[styles.dropdown, isFocus && { borderColor: colors.primary }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={categories}
        dropdownPosition="top"
        keyboardAvoiding={true}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={"Selecione uma categoria"}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={onChange}
      />
    </View>
  );
}
