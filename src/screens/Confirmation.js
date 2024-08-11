import { Text, View, StyleSheet } from "react-native";

const ConfirmationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Correct code! Congrats!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
export default ConfirmationScreen;
