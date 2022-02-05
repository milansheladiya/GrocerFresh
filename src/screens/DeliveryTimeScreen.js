import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from "react-native";
import CountDown from "react-native-countdown-component";

const DeliveryTimeScreen = ({ navigation }) => {
  const [totalDuration, setTotalDuration] = useState(900);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delivery Time</Text>

      <Text style={{ margin: 20, fontSize: 20 }}>
        {" "}
        Estimated Delivery Time{" "}
      </Text>

      <CountDown
        until={totalDuration}
        onFinish={() => alert("You order has been Delivered!")}
        onPress={() => alert("On the way!")}
        size={20}
      />

      <Text
        style={{
          margin: 20,
          fontSize: 20,
          borderWidth: 5,
          padding: 20,
          borderRadius: 30,
          borderColor: "#58B4AE",
          marginTop: 100,
        }}
      >
        {" "}
        For any inquiry : 514-661-6789{" "}
      </Text>

      <TouchableOpacity style={styles.homeBtn} onPress={() => {navigation.navigate("HomeScreen")}}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
    paddingTop: 40
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1A5F7A",
    marginVertical: 30,
  },
  homeBtn: {
    padding: 20,
    width: "60%",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 140,
    backgroundColor: "#FC4F4F",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

export default DeliveryTimeScreen;
