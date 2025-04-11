import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const listItems = () => {
    router.navigate("/register");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={listItems}>
        <Text style={styles.title}>Entrar</Text>
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
    gap: 24,
  },
  button: {
    backgroundColor: "#303030",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  title: {
    color: "#fcfcfcfc",
    fontSize: 20,
    fontWeight: "bold",
  },
});
