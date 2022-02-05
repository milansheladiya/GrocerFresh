
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Button,
  Dimensions,
  Alert,
  TouchableOpacity,
} from "react-native";
import { insertWithSetDocHandler } from "../Firebase/insert";
import { signUpHandler, getUserIdHandler } from "../Firebase/auth";
import Icon from "react-native-vector-icons/Ionicons";
import { getAuth } from "firebase/auth";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  const [password, setPassword] = useState("");

  function backAlert() {
    navigation.navigate("LoginScreen");
    console.log("back to loginScreen");
  }

  const signUpOperator = async () => {
    const data = {
      name: name,
      email: email.toLowerCase(),
      contact: contact,
      address: address,
      postal: postal.toUpperCase(),
      isAdmin: false,
    };

    const isRes = await signUpHandler(email, password, name);
    if (isRes > 0) {
      const uid = getAuth().currentUser.uid;
      const res = insertWithSetDocHandler(["customers", uid], data);
      resetAllField();
      navigation.navigate("LoginScreen");
    } else {
      console.log("something went wrong!");
      if (
        name.length <= 0 ||
        email.length <= 0 ||
        contact.length <= 0 ||
        address.length <= 0 ||
        postal.length <= 0 ||
        password.length <= 0
      ) {
        Alert.alert("Enter required Details");
      }
    }
  };

  const resetAllField = () => {
    setName("");
    setEmail("");
    setContact("");
    setAddress("");
    setPostal("");
    setPassword("");
  };

  return (
    <View
      style={{
        paddingTop: 40,
        backgroundColor: "white",
        height: Dimensions.get("window").height,
        flex: 1,
      }}
    >
      <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
        <TouchableOpacity onPress={backAlert}>
          <Icon
            name="arrow-back"
            size={30}
            color={"black"}
            style={{ margin: 10 }}
          />
        </TouchableOpacity>
        <Image
          source={require("../../assets/GrocerFreshLogo.png")}
          style={styles.img}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          alignSelf: "center",
          color: "  ",
          marginTop: 10,
        }}
      >
        {" "}
        Sign Up{" "}
      </Text>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.viewContain}>
          <Text style={styles.txt}>Name : </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter the Name"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.viewContain}>
          <Text style={styles.txt}>Email : </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter the Email"
            autoComplete="email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.viewContain}>
          <Text style={styles.txt}>Contact No : </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Contact Number"
            autoComplete="cc-number"
            value={contact}
            onChangeText={setContact}
            maxLength={10}
          />
        </View>
        <View style={styles.viewContain}>
          <Text style={styles.txt}> Address : </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Full Address"
            autoComplete="street-address"
            value={address}
            onChangeText={setAddress}
          />
        </View>
        <View style={styles.viewContain}>
          <Text style={styles.txt}> Pin Code : </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Pin Code"
            autoComplete="postal-code"
            value={postal}
            onChangeText={setPostal}
            maxLength={6}
          />
        </View>
        <View style={styles.viewContain}>
          <Text style={styles.txt}> Password : </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            autoComplete="password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={{ marginTop: 40 }}>
          <Button
            title="SignUp"
            style={{ padding: 20 }}
            onPress={signUpOperator}
          />
          <Button
            title="Already have an Account?"
            style={{ padding: 20 }}
            onPress={() => navigation.navigate("LoginScreen")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 220,
    height: 100,
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 30,
  },
  viewContain: {
    flexDirection: "row",
    padding: 20,
  },
  txt: {
    flex: 1,
    fontSize: 20,
  },
  inputStyle: {
    flex: 2,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 20,
    width: "50%",
    fontSize: 20,
    borderColor: "black",
  },
});

export default SignupScreen;
