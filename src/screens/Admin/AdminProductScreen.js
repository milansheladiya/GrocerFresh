import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AdminProduct from "../../components/AdminProduct";
import { readAllHandler } from "../../Firebase/read";

const AdminProductScreen = (props) => {
  const [pageTitle, setPageTitle] = useState(
    props.navigation.getParam("category")
  );
  const [prodData, setProdData] = useState([]);
  const [firstRender, setFirstRender] = useState(false);
  //setPageTitle(props.category);

  const getProductsByCategoryHandler = async () => {
    const res = await readAllHandler(["grocery", pageTitle, pageTitle]);
    await res.forEach((doc) => {
      setProdData((prodData) => [
        ...prodData,
        { ...doc.data(), id: doc.id, category: pageTitle },
      ]);
    });
    console.log(prodData);
  };

  useEffect(async () => {
    if (!firstRender) {
      await getProductsByCategoryHandler();
      setFirstRender(true);
    }
  }, [firstRender]);

  return (
    <View
      style={{
        paddingTop: 60,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
    >
      <View style={styles.titleOuter}>
        <TouchableOpacity onPress={() => props.navigation.navigate("AdminHomeScreen")}>
          <Icon
            name="arrow-back"
            size={30}
            color={"black"}
            style={{ margin: 10, padding: 11 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{pageTitle} </Text>
      </View>

      <FlatList
        style={{ alignSelf: "center" }}
        showsVerticalScrollIndicator={false}
        data={prodData}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <AdminProduct item={item} navigation={props.navigation} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleOuter: {
    backgroundColor: "#3B6978",
    // margin: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    // borderRadius:20,
    marginBottom: 40,
    flexDirection: "row",
  },
  title: {
    textAlign: "center",
    padding: 20,
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#FAEEE7",
  },
});

export default AdminProductScreen;
