import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import {facebookLogin} from "../Firebase/facebook";

const OtherLoginsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/GrocerFreshLogo.jpeg")}
        style={styles.img}
      />

      <TouchableOpacity style={styles.signUp} onPress={() => navigation.navigate("SignupScreen")}>
        <Text style={styles.facebookText}>SignUp with Email</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleBtn}>
        <Text style={styles.googleText}>SignUp with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookBtn} onPress={facebookLogin}>
        <Text style={styles.facebookText}>SignUp with Facebook</Text>
      </TouchableOpacity>

      <View style={styles.LoginArea}>
        <Text style={{ flex: 2 }}>Have any account?</Text>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.LoginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
  img: {
    marginBottom: 10,
    width: 200,
    height: 200,
  },
  signUp: {
    width: "80%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "white",
  },

  facebookBtn: {
    width: "80%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#29487d",
  },
  facebookText: {
    color: "white",
    fontWeight: "bold",
  },
  googleBtn: {
    width: "80%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#4285f4",
  },
  googleText: {
    color: "white",
    fontWeight: "bold",
  },

  LoginArea: {
    marginTop: 20,
    flexDirection: "row",
    marginHorizontal: 90,
  },

  LoginText: {
    color: "#113CFC",
    fontWeight: "bold",
  },
});

export default OtherLoginsScreen;
