import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
  CheckBox,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import FavoriteItem from "../components/FavoriteItem";
import {personalData} from '../Data/data';

const FavouriteScreen = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="favorite" size={60} color="#9A0680" style={{marginVertical:15}}/>
      <Text style={{color:'#9A0680', fontSize:30, fontStyle:'italic'}}> Favourite Items </Text>

      <FlatList
        data={personalData[1]}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <FavoriteItem item={item}/>}
        />

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
});

export default FavouriteScreen;
