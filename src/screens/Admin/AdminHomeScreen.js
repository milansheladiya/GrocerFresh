import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { signOutHandler,isSignedInHandler } from "../../Firebase/auth";

const AdminHomeScreen = (props) => {
  const [adminName, setAdminName] = useState();

  function showAlert() {
    Alert.alert("Do you want to logout", "", [
      {
        text: "Yes",
        onPress: () => {
          signOutHandler();
          props.navigation.navigate("LoginScreen");
          Alert.alert("Message", "Logged out sucessfully");
        },
      },
      {
        text: "No",
        onPress: () => props.navigation.navigate("AdminHomeScreen"),
      },
    ]);
  }

  useEffect(() => {
    const res = isSignedInHandler();
    if (!res) {
      console.log("Admin not logged in---------->");
      logOutHandler();
    } else {
      console.log("Admin logged in ~~~~~~~~~~~~~~>");
    }
  }, []);

  const logOutHandler = () => {
    Alert.alert("Do you want to logout", "", [
      {
        text: "Yes",
        onPress: () =>
          props.navigation.replace("LoginScreen") && signOutHandler(),
      },
      {
        text: "No",
        onPress: () => props.navigation.navigate("AdminHomeScreen"),
      },
    ]);
  };

  return (
    <View>
      <Text style={styles.title}>Admin Home</Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          // margin: 10,
          alignSelf:'center',
          marginTop: 50,
          marginHorizontal: 50,
          color: "#C02F1D",
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
        }}
      >
        Welcome to Admin Login
      </Text>
      <View style={styles.boxLayout}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => props.navigation.navigate("NewProductScreen")}
        >
          <Text style={styles.buttonText}>New Product</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => props.navigation.navigate("CategoryScreen")}
        >
          <Text style={styles.buttonText}>Modify Product</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => props.navigation.navigate("AdminOrderList")}
        >
          <Text style={styles.buttonText}>Order List</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={showAlert}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#FAEEE7",
    backgroundColor: "#325288",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    top: 0,
    height: 100,
    paddingTop: 50,
  },
  boxLayout: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20,
    marginVertical: "10%",
    padding: 10,
    height: 200,
    backgroundColor: "#F7F6F2",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    //borderWidth:1,
    borderRadius: 20,
    // flexWrap:'wrap',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginBottom: 10,
  },
  button1: {
    padding: 20,
    backgroundColor: "#C62A88",
    width: 100,
    height: 100,
    borderRadius: 15,
    alignSelf: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  button2: {
    padding: 20,
    backgroundColor: "#02475E",
    width: 100,
    height: 100,
    borderRadius: 15,
    alignSelf: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    color: "#FEF5ED",
    fontWeight: "bold",
  },
  logoutButton: {
    borderWidth: 1,
    width: 200,
    alignSelf: "center",
    borderRadius: 25,
    backgroundColor: "#070D59",
    position: "absolute",
    bottom: "-50%",
  },
  logoutButtonText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});

export default AdminHomeScreen;
