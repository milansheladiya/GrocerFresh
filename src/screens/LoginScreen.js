import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import {
  signInHandler,
  isSignedInHandler,
  auth,
  signOutHandler,
} from "../Firebase/auth";
import { readAllWithId } from "../Firebase/read";
import { NavigationEvents } from "react-navigation";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(async () => {
    checkSigninHandler();
  }, [isAdmin]);

  const isItAdmin = async () => {
    try {
      const res = await readAllWithId(["customers", auth.currentUser.uid]);
      console.log(res.data().isAdmin, "-------- inside    Login --------");
      setIsAdmin(res.data().isAdmin);
      setUserName(res.data().name);
    } catch (err) {
      console.log(err.message);
    }
  };

  const checkSigninHandler = async () => {
    if (await isSignedInHandler()) {
      isItAdmin();
      if (isAdmin === null) {
      } else if (isAdmin) {
        // if user admin
        console.log("  Admin  ");
        navigation.navigate("AdminHomeScreen");
      } else if (!isAdmin) {
        navigation.navigate("HomeScreen");
      }
    } else {
      console.log("User were not logged in!");
    }
  };

  useEffect(() => {
    if (isAdmin === null) {
      console.log("null");
    } else if (isAdmin) {
      console.log("Admin");
      navigation.navigate("AdminHomeScreen");
    } else if (!isAdmin) {
      navigation.navigate("HomeScreen");
    }
  }, [isAdmin]);

  const sinInOperator = async () => {
    await signOutHandler();
    const res = await signInHandler(email, password);
    console.log("------is Loggedin ----- : ", res);
    //setIsAdmin(null);
    if (res) {
      console.log("Is Admin : ============ ", isAdmin);
      isItAdmin();
    } else {
      console.log("Wrong credentials ");
      Alert.alert("Message", "Wrong credentials!");
    }
  };

  return (
    <View style={styles.container}>
      <NavigationEvents
        onDidFocus={() => {
          checkSigninHandler();
        }}
      />
      <Image
        source={require("../../assets/GrocerFreshLogo.jpeg")}
        style={styles.img}
      />
      <Text
        style={{
          fontSize: 20,
          color: "red",
          fontWeight: "300",
          margin: 10,
          marginBottom: 50,
        }}
      >
        Welcome to Grocer Fresh
      </Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={setEmail}
          style={styles.textInput}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#003f5c"
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
    backgroundColor: "#fff",
    alignItems: "center",
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
  },
  img: {
    marginBottom: 10,
    width: 200,
    height: 200,
  },

  inputView: {
    backgroundColor: "#D6E5FA",
    borderRadius: 10,
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
