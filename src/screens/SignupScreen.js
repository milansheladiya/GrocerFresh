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
  TouchableOpacity,
  Alert,
} from "react-native";
import Buttons from "../components/Buttons";
const SignupScreen = ({ navigation }) => {
  function showAlert() {
    Alert.alert("Message", "SignUp Sucessful", [
      {
        text: "OK",
        onPress: () => navigation.replace("LoginScreen"),
      },
    ]);
  }

  return (
    <ScrollView
      style={{
        paddingTop: 50,
        backgroundColor: "white",
        height: Dimensions.get("window").height,
        flex: 1,
      }}
    >
      <Image
        source={require("../../assets/GrocerFreshLogo.png")}
        style={styles.img}
      />
      <Text
        style={{
          fontSize: 20,
          alignSelf: "center",
          color: "green",
          marginTop: 10,
          textTransform: "uppercase",
        }}
      >
        {" "}
        Enter your details{" "}
      </Text>
      <View>
        <View style={styles.viewContain}>
          <Text style={styles.txt}>Name : </Text>
          <TextInput style={styles.inputStyle} placeholder="Enter the Name" />
        </View>
        <View style={styles.viewContain}>
          <Text style={styles.txt}>Email : </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter the Email"
            autoComplete="email"
          />
        </View>
        <View style={styles.viewContain}>
          <Text style={styles.txt}>Contact No : </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Contact Number"
            autoComplete="cc-number"
          />
        </View>
        <View style={styles.viewContain}>
          <Text style={styles.txt}> Address : </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Full Address"
            autoComplete="street-address"
          />
        </View>
        <View style={styles.viewContain}>
          <Text style={(styles.txt, { fontSize: 17 })}> Postal Code : </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Postal Code"
            autoComplete="postal-code"
          />
        </View>
        <View style={styles.viewContain}>
          <Text style={styles.txt}> Password : </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            autoComplete="password"
          />
        </View>
        <View style={styles.viewContain}>
          <Text style={styles.txt}>Re-enter Password : </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            autoComplete="password"
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            height: 150,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Button title="SignUp" onPress={showAlert} />
          <Button
            title="Already have an account?"
            onPress={() => navigation.replace("LoginScreen")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 220,
    height: 100,
    alignSelf: "center",
  },
  viewContain: {
    flexDirection: "row",
    padding: 20,
    marginTop: 10,
  },
  txt: {
    flex: 1,
    fontSize: 20,
  },
  inputStyle: {
    flex: 2,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 2,
    borderWidth: 0.8,
    borderRadius: 10,
    width: "30%",
    fontSize: 20,
    borderColor: "black",
  },
});

export default SignupScreen;
