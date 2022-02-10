import React from "react";
import { Dimensions, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function BottomNavigation({ navigation,style }) {
  const btnStyle = {
    width: Dimensions.get("window").width / 3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 65,
  };
  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        position: "fixed",
        bottom: 0,
        left: 0,
        display: "flex",
        flexDirection: "row",
        zIndex: 55,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        backgroundColor: "lightblue",
        ...style
      }}
    >
      <TouchableOpacity
        style={btnStyle}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Icon name="home" size={30} color={"#000000"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={btnStyle}
        onPress={() => navigation.navigate("FavouriteScreen")}
      >
        <Icon name="heart-circle-outline" size={40} color={"red"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={btnStyle}
        onPress={() => navigation.navigate("AccountScreen")}
      >
        <Icon name="person-circle-outline" size={40} color={"#000000"} />
      </TouchableOpacity>
    </View>
  );
}
