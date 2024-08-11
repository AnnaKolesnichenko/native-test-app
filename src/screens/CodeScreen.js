import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { CodeField, Cursor } from "react-native-confirmation-code-field";
import { verifyCode } from "../services/api";

const CodeScreen = () => {
  const [value, setValue] = useState("");
  const [active, setActive] = useState(false);
  const CELL_COUNT = 6;

  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const response = await verifyCode({ code: value });
      if (response.success) {
        navigation.navigate("Confirmation");
      } else {
        Alert.alert("Error", "Invalid code.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while verifying code.");
    }
  };

  useEffect(() => {
    if (value.length === CELL_COUNT) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [value]);

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Welcome to App</Text>
      <Text style={styles.descr}>
        Enter the confirmation code that will be sent to you by SMS
      </Text>

      <View style={styles.root}>
        <Text style={styles.label}>Secure Code</Text>
        <CodeField
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <React.Fragment key={index}>
              <View style={[styles.cell, isFocused && styles.focusCell]}>
                <Text
                  style={[
                    styles.text,
                    !symbol && !isFocused ? styles.placeholderText : null,
                  ]}
                >
                  {symbol || (!isFocused ? "0" : <Cursor />)}
                </Text>
              </View>

              {index === 2 && <Text style={styles.dash}>-</Text>}
            </React.Fragment>
          )}
        />
      </View>

      <View style={styles.reg}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.link}
        >
          <Text style={styles.loginLink}>Resend the Code</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.continueBtn, { opacity: active ? 1 : 0.25 }]}
        onPress={() => handleSubmit()}
        disabled={!active}
      >
        <Text style={styles.btnText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CodeScreen;

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
    marginTop: 32,
    marginBottom: 16,
  },
  descr: {
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 40,
    fontFamily: "Inter",
    color: "#667085",
    textAlign: "center",
  },
  label: {
    fontSize: 12,
    fontWeight: "medium",
    textAlign: "left",
    color: "#344054",
  },
  root: {
    marginBottom: 40,
  },
  codeFieldRoot: { marginTop: 10 },
  cell: {
    width: 52,
    height: 64,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#eee8f0",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  text: { fontSize: 40, textAlign: "center", color: "#30b0c7" },
  focusCell: {
    borderColor: "purple",
  },
  placeholderText: {
    color: "#eee8f0",
  },

  dash: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#eee8f0",
    marginHorizontal: 8,
    alignSelf: "center",
  },

  continueBtn: {
    marginBottom: 16,
    width: "100%",
    height: 44,
    backgroundColor: "#30b0c7",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
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
    marginBottom: 40,
  },
});
