import { router, useLocalSearchParams } from "expo-router";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const params = useLocalSearchParams();

  const handleBack = () => {
    if (!router.canGoBack()) {
      Alert.alert("Não é possível voltar", "Você está na primeira tela");
    }

    router.back();
  };

  return (
    <View style={styles.container}>
      <Text>Olá {params.name}</Text>
      <TouchableOpacity style={styles.button} onPress={handleBack}>
        <Text style={styles.text}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#303030",
    padding: 10,
    borderRadius: 5,
  },

  text: {
    color: "#fcfcfcfc",
    fontSize: 20,
    fontWeight: "bold",
  },
});
