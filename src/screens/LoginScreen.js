import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Button from "../UI/Button";

const LoginScreen = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!phone) {
      Alert.alert(
        "Validation Error",
        "Enter your phone number with which you registered!"
      );
      return;
    }

    setUsername("");
    setPassword("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Welcome to App</Text>
      <Text style={styles.descr}> Please enter your details</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Phone number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(text) => setPhone(text)}
          placeholder="+33 222 111 2222"
          secureTextEntry={false}
        />
      </View>

      <Button text="Login" link="Confirmation" handleSubmit={handleSubmit} />

      <View style={styles.reg}>
        <Text style={styles.textReg}>Don't you have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.link}
        >
          <Text style={styles.loginLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 120,
    padding: 16,
  },
  mainText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 32,
    marginBottom: 16,
  },
  descr: {
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 40,
    fontFamily: "Inter",
  },
  form: {
    width: "100%",
  },
  label: {
    fontSize: 12,
    fontWeight: "medium",
    marginBottom: 5,
    color: "#344054",
  },
  input: {
    marginBottom: 40,
    paddingHorizontal: 7,
    paddingLeft: 7,
    width: "100%",
    height: 44,
    borderWidth: 1,
    borderColor: "#c4c5c6",
    borderRadius: 8,
    placeHolderTextColor: "#667085",
  },
  reg: {
    flexDirection: "row",
  },
  textReg: {
    fontSize: 14,
    color: "#727477",
    fontFamily: "Inter",
  },
  link: {
    marginLeft: 3,
  },
  loginLink: {
    fontSize: 14,
    color: "#00d1ac",
    fontFamily: "Inter",
    textDecorationLine: "underline",
  },
});
