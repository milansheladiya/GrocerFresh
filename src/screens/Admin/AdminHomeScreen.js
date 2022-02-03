import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { signOutHandler } from "../../Firebase/auth";

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
      if(!res)
      {
        console.log("Admin not logged in---------->");
        logOutHandler();
      }
      else{
        console.log("Admin logged in ~~~~~~~~~~~~~~>");
      }
    },[]);

    const logOutHandler = () => {
      signOutHandler();
      props.navigation.navigate("LoginScreen");
   }

  return (
    <View style={{ paddingTop: 60 }}>
      <Text style={styles.title}>Welcome {adminName} (Admin)</Text>

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
        <TouchableOpacity style={styles.button1} onPress={() => props.navigation.navigate("AdminOrderList")}>
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
    padding: 20,
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#FAEEE7",
    backgroundColor: "#325288",
    margin: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    
  },
  boxLayout: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    margin: 20,
    marginVertical: 10,
    padding: 10,
    height: 500,
    backgroundColor: "#F7F6F2",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    //borderWidth:1,
    borderRadius: 20,
    // flexWrap:'wrap',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  button1: {
    padding: 20,
    backgroundColor: "#C62A88",
    width: 130,
    height: 130,
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
    width: 130,
    height: 130,
    borderRadius: 15,
    alignSelf: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "#FEF5ED",
    fontWeight: "bold",
  },
  logoutButton: {
    borderWidth: 1,
    width: 300,
    alignSelf: "center",
    borderRadius: 25,
    backgroundColor: "#070D59",
    position: "absolute",
    bottom: -200,
  },
  logoutButtonText: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});

export default AdminHomeScreen;
