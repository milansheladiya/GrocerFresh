import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
  CheckBox,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import FavoriteItem from "../components/FavoriteItem";
import BottomTabNavigator from "../components/BottomTabNavigator";
import {auth} from "../Firebase/auth";
import {readAllWithId} from "../Firebase/read";

const FavouriteScreen = ({navigation}) => {

  const [fav,setFav] = useState([]);

  useEffect(() => {
    getFavFromFirebase();
  },[]);

  useEffect(() => {
    console.log("-------",fav);
  },[fav]);

  const getFavFromFirebase = async () => {
     const res = await readAllWithId(["customers",auth.currentUser.uid]);
      // console.log(res.data().favorite);
      if(res.data().favorite !== undefined)
      {
        var temp = [];
          for(var i = 0;i < res.data().favorite.length; i++)
          {
            console.log("-----iterate");
            const dts = await readAllWithId(["grocery",res.data().favorite[i].category,res.data().favorite[i].category,res.data().favorite[i].prodId]);
            // console.log(dts.data());
            temp.push(dts.data());
            console.log();
          }
          setFav([...temp]);
      }
  };

  return (
    <SafeAreaView style={styles.container}>
      <MaterialIcons name="favorite" size={60} color="#9A0680" style={{marginVertical:15}}/>
      <Text style={{color:'#9A0680', fontSize:30, fontStyle:'italic'}}> Favourite Items </Text>

      <FlatList
        data={fav}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <FavoriteItem item={item}/>}
        />
    <BottomTabNavigator navigation={navigation} style={{position:'absolute',bottom:0}}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width:'100%',
    height: "100%",
  },
});

export default FavouriteScreen;
