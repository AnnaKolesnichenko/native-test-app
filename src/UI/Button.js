import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({
  text,
  backGround,
  border,
  borderCol,
  link,
  textCol,
  handleSubmit,
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (handleSubmit) {
      handleSubmit();
    } else {
      navigation.navigate(`${link}`);
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.continueBtn,
        backGround && { backgroundColor: backGround },
        border && { borderWidth: border },
        borderCol && { borderColor: borderCol },
      ]}
      onPress={handlePress}
    >
      <Text style={[styles.btnText, textCol && { color: textCol }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
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
});
