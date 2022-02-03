import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  signInHandler,
  isSignedInHandler,
  isAdminUser,
} from "../Firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(async () => {
    if (await isSignedInHandler()) {
      const adminUser = await isAdminUser();
      if (adminUser) {
        // if user admin
        console.log("AdminHomeScreen");
        navigation.navigate("AdminHomeScreen");
      } else if (!adminUser) {
        console.log("HomeScreen");
        navigation.navigate("HomeScreen");
      }
    } else {
      console.log("User were not logged in!");
    }
  }, []);

  const sinInOperator = async () => {
    const res = await signInHandler(email, password);
    console.log(res, "------ Login -----");
    if (res) {
      const adminUser = await isAdminUser();
      if (adminUser) {
        console.log("Admin");
        console.log('details entered are correct');
        navigation.navigate("AdminHomeScreen");
      } else if (!adminUser) {
        console.log("HomeScreen");
        console.log('details entered are correct');
        navigation.navigate("HomeScreen");
      }
    } else {
      console.log("Wrong credentials");
      console.log('details entered are not correct');
      Alert.alert("Messagge", "Wrong Credentials");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/GrocerFreshLogo.jpeg")}
        style={styles.img}
      />
      <Text
        style={{
          fontSize: 20,
          color: "red",
          fontWeight: "200",
          margin: 10,
          marginBottom: 50,
        }}
      >
        Welcome to Grocer Fresh
      </Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#f003f5c"
          value={email}
          onChangeText={setEmail}
          style={styles.textInput}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#f003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          style={styles.textInput}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotButton}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={sinInOperator}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.signUpArea}>
        <Text style={{ flex: 2 }}>Don't have any account?</Text>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("SignupScreen")}
        >
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
    backgroundColor: "lightblue",
    borderWidth: 1,
  },
  loginText: {
    color: "black",
    fontWeight: "400",
  },
  signUpArea: {
    marginTop: 20,
    flexDirection: "row",
    marginHorizontal: 60,
  },

  signUpText: {
    color: "#113CFC",
    fontWeight: "bold",
  },
});

export default LoginScreen;
