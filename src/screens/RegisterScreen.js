import { useNavigation } from "@react-navigation/native";
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
import { sendCode } from "../services/api";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (!username || !lastName || !phone) {
      Alert.alert("Validation Error", "All fields are required!");
      return;
    }

    try {
      const response = await sendCode();

      if (response.success) {
        Alert.alert("Code Sent", `The verification code is ${response.code}`);

        navigation.navigate("CodeScreen");
      } else {
        Alert.alert("Error", "Failed to send code.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while sending code.");
    }

    setUsername("");
    setLastName("");
    setPhone("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Welcome to App</Text>
      <Text style={styles.descr}> Please enter your details</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Enter name"
        />
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          placeholder="Enter last name"
        />
        <Text style={styles.label}>Phone number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(text) => setPhone(text)}
          placeholder="+33 222 111 2222"
        />
      </View>
      <Button text="Continue" handleSubmit={handleSubmit} />

      <View style={styles.reg}>
        <Text style={styles.textReg}>Do you have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.link}
        >
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

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
    fontWeight: "400",
    marginBottom: 40,
    fontFamily: "Inter",
    color: "#667085",
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
    marginBottom: 20,
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
    cursor: "pointer",
  },
  loginLink: {
    fontSize: 14,
    color: "#00d1ac",
    fontFamily: "Inter",
    textDecorationLine: "underline",
  },
});
