import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import ConfirmationScreen from "./src/screens/Confirmation";
import mainImage from "../images/mainImg.png";
import { useNavigation } from "@react-navigation/native";
import Button from "../UI/Button";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={mainImage} style={styles.image} />
      <Text style={styles.mainText}>Welcome to App</Text>
      <Text style={styles.aboutApp}>
        Lorem ipsum dolor sit amet consectetur. A ut pellentesque amet phasellus
        augue. Neque at felis pulvinar malesuada varius egestas dis cras.{" "}
      </Text>
      <Button text="Login" link="Login" />
      <Button
        text="Register"
        link="Register"
        backGround="transparent"
        border="1"
        borderCol="#c4c5c6"
        textCol="black"
      />

      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    padding: 16,
  },
  image: {
    width: 358,
    height: 358,
    borderRadius: 16,
  },
  mainText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 32,
    marginBottom: 32,
  },
  aboutApp: {
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 32,
    fontFamily: "Inter",
  },
  //   login: {
  //     marginBottom: 10,
  //     width: "100%",
  //     height: 44,
  //     backgroundColor: "#30b0c7",
  //     borderRadius: 8,
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  //   btnText: {
  //     color: "white",
  //     fontSize: 16,
  //     fontWeight: "bold",
  //     fontFamily: "Inter",
  //   },
  //   register: {
  //     width: "100%",
  //     height: 44,
  //     backgroundColor: "transparent",
  //     borderWidth: 1,
  //     borderColor: "#c4c5c6",
  //     borderRadius: 8,
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  //   regText: {
  //     fontSize: 16,
  //     fontWeight: "bold",
  //     fontFamily: "Inter",
  //     color: "",
  //   },
});
