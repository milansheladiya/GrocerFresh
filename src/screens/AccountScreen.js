import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BottomTabNavigator from "../components/BottomTabNavigator";
import Buttons from "../components/Buttons";
import { signOutHandler } from "../Firebase/auth";

const { width, height } = Dimensions.get("window");

const AccountScreen = ({ navigation }) => {
  const [currentUser, setCurrentUser] = useState({});
  const pageType = navigation.state?.params?.type || "Account Details";

  useEffect(() => {
    const auth = getAuth();
    console.log(auth.currentUser);
    setCurrentUser(auth.currentUser);
  }, []);
  function showAlert() {
    Alert.alert("Do you want to logout", "", [
      {
        text: "Yes",
        onPress: () => {
          signOutHandler();
          navigation.replace("LoginScreen");
          Alert.alert("Message", "Logged out sucessfully");
        },
      },
      { text: "No", onPress: () => navigation.navigate("AccountScreen") },
    ]);
  }

  return (
    <>
      <View
        style={{ width: width, height: height, flex: 1, position: "relative" }}
      >
        <View
          style={{
            marginTop: 0,
            width: Dimensions.get("window").width,
            backgroundColor: "lightblue",
            flexDirection: "row",
            justifyContent: "flex-start",
            zIndex: -1,
            position: "relative",
            paddingTop: 40,
          }}
        >
          <Text
            style={{
              width: Dimensions.get("window").width,
              marginHorizontal: "auto",
              marginVertical: 5,
              paddingVertical: 6,
              fontSize: 23,
              color: "black",
              textAlign: "center",
              fontFamily: "Arial",
              fontWeight: "bold",
              height: 30,
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            {pageType}
          </Text>
        </View>

        <View
          style={{
            width: Dimensions.get("window").width,
            height: height,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              width: Dimensions.get("window").width,
              height: height,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 300,
              paddingTop: 10,
              backgroundColor: "white",
            }}
          >
            <Icon
              name="person-circle-outline"
              size={70}
              style={{ marginBottom: 10 }}
            />
            <Text style={{ marginBottom: 20, fontSize: 20 }}>
              Good to be back !
            </Text>
            <Buttons
              label="Home"
              onPress={() => navigation.navigate("HomeScreen")}
            />
            {/* <Buttons label="Orders" onPress={() => navigation.navigate()} /> */}
            <Buttons
              label="Account information"
              onPress={() => navigation.navigate()}
            />
            <Icon
              name="log-out-outline"
              size={30}
              onPress={showAlert}
              color={"maroon"}
              style={{ margin: 5, marginVertical: 70 }}
            >
              Logout
            </Icon>
          </View>
        </View>
      </View>
      <BottomTabNavigator navigation={navigation} />
    </>
  );
};

export default AccountScreen;
