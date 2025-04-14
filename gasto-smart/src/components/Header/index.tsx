import { useRef, useState } from "react";
import { View, TextInput, Animated, Easing, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import Button from "../Button";
import Text from "../Text";
import { styles } from "./styles";
import { Input } from "@components/Input";
import colors from "themes/colors";

interface HeaderProps {
  onSearch: (value: string) => void;
  searchValue: string;
}

export default function Header({ onSearch, searchValue }: HeaderProps) {
  const [searchVisible, setSearchVisible] = useState(false);
  const heightAnim = useRef(new Animated.Value(88)).current;
  const searchOpacity = useRef(new Animated.Value(0)).current;
  const searchTranslate = useRef(new Animated.Value(20)).current;

  const toggleSearchBar = () => {
    if (!searchVisible) {
      Animated.parallel([
        Animated.timing(heightAnim, {
          toValue: 140,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: false,
        }),
        Animated.timing(searchOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(searchTranslate, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(heightAnim, {
          toValue: 88,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: false,
        }),
        Animated.timing(searchOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(searchTranslate, {
          toValue: 20,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }

    setSearchVisible(!searchVisible);
  };

  return (
    <Animated.View style={[styles.container, { height: heightAnim }]}>
      <View style={styles.content}>
        <Text style={styles.title}>Últimos gastos</Text>

        <Button
          style={styles.searchButton}
          icon={
            <MaterialIcons name="search" size={20} color={colors.secondary} />
          }
          onPress={toggleSearchBar}
        />
      </View>

      <Animated.View
        style={{
          opacity: searchOpacity,
          transform: [{ translateY: searchTranslate }],
        }}
      >
        <Input
          rightIcon={
            <MaterialIcons name="search" size={24} color={colors.secondary} />
          }
        >
          <Input.Default
            placeholder="Buscar gasto..."
            value={searchValue}
            onChangeText={onSearch}
          />
        </Input>
      </Animated.View>
    </Animated.View>
  );
}
