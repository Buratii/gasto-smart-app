import {
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import React, { useCallback, useRef, useState, useEffect } from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Text from "@components/Text";
import { styles } from "./styles";

type OptionItem = {
  value: string;
  label: string;
};

interface DropDownProps {
  categories: OptionItem[];
  onChange: (value: string) => void;
  placeholder: string;
  value?: string;
}

export default function Dropdown({
  categories,
  onChange,
  placeholder,
  value: controlledValue,
  ...props
}: DropDownProps) {
  const [expanded, setExpanded] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");
  const buttonRef = useRef<View>(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    if (controlledValue) {
      const selectedItem = categories.find(
        (item) => item.value === controlledValue
      );
      if (selectedItem) {
        setSelectedLabel(selectedItem.label);
      }
    } else {
      setSelectedLabel("");
    }
  }, [controlledValue, categories]);

  const showDropdown = useCallback(() => {
    if (buttonRef.current) {
      buttonRef.current.measureInWindow((x, y, width, height) => {
        setTop(y + height);
        setExpanded(true);
      });
    }
  }, []);

  const toggleExpanded = useCallback(() => {
    if (!expanded) {
      showDropdown();
    } else {
      setExpanded(false);
    }
  }, [expanded, showDropdown]);

  const onSelect = useCallback(
    (item: OptionItem) => {
      onChange(item.value);
      setSelectedLabel(item.label);
      setExpanded(false);
    },
    [onChange]
  );

  return (
    <View
      ref={buttonRef}
      onLayout={(event) => {
        const layout = event.nativeEvent.layout;
        const topOffset = layout.y;
        const heightOfComponent = layout.height;

        const finalValue =
          topOffset + heightOfComponent + (Platform.OS === "android" ? -32 : 3);

        setTop(finalValue);
      }}
    >
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={toggleExpanded}
      >
        <Text
          style={[
            selectedLabel ? styles.selectedTextStyle : styles.placeholderStyle,
          ]}
        >
          {selectedLabel || placeholder}
        </Text>
        <MaterialIcons
          name={expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          style={styles.icon}
        />
      </TouchableOpacity>
      {expanded ? (
        <Modal visible={expanded} transparent>
          <TouchableWithoutFeedback onPress={() => setExpanded(false)}>
            <View style={styles.backdrop}>
              <View
                style={[
                  styles.options,
                  {
                    top,
                  },
                ]}
              >
                <FlatList
                  keyExtractor={(item) => item.value}
                  data={categories}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={[
                        styles.optionItem,
                        item.value === controlledValue && styles.selectedItem,
                      ]}
                      onPress={() => onSelect(item)}
                    >
                      <Text
                        style={
                          item.value === controlledValue
                            ? styles.selectedText
                            : null
                        }
                      >
                        {item.label}
                      </Text>
                    </TouchableOpacity>
                  )}
                  ItemSeparatorComponent={() => (
                    <View style={styles.separator} />
                  )}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      ) : null}
    </View>
  );
}
