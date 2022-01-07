import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/GrocerFreshLogo.jpeg")}
        style={styles.img}
      />

      <View style={styles.inputView}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          style={styles.textInput}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setEmail(password)}
          style={styles.textInput}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotButton}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("HomeScreen")}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.signUpArea}>
        <Text style={{flex:2}}>Don't have any account?</Text>
        <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate("SignupScreen")}>
          <Text style={styles.signUpText}>SignUp</Text>
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

  inputView: {
    backgroundColor: "#D6E5FA",
    borderRadius: 20,
    width: "70%",
    height: 45,
    marginBottom: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1597E5",
  },

  textInput: {
    height: 50,
    padding: 10,
    fontWeight: "bold",
  },

  forgotButton: {
    height: 30,
    marginBottom: 10,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#113CFC",
  },
  loginText: {
    color: "#F5F5F5",
    fontWeight: "bold",
  },
  signUpArea: {
    marginTop: 20,
    flexDirection:'row',
    marginHorizontal:60
  },

  signUpText: {
    color: "#113CFC",
    fontWeight: "bold",
  },
});

export default LoginScreen;
