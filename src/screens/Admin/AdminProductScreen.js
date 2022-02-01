import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import AdminProduct from "../../components/AdminProduct";
import { readAllHandler } from "../../Firebase/read";

const AdminProductScreen = (props) => {
  const [pageTitle, setPageTitle] = useState(props.navigation.getParam('category'));
  const [prodData, setProdData] = useState([]);
  const [firstRender,setFirstRender] = useState(false);
  //setPageTitle(props.category);

  const getProductsByCategoryHandler = async () => {
    const res = await readAllHandler(["grocery", pageTitle, pageTitle]);
    await res.forEach((doc) => {
      setProdData((prodData) => [...prodData, { ...doc.data(), id: doc.id,category:pageTitle }]);
    });
    console.log(prodData);
  };

  useEffect(async () => {
    if(!firstRender)
    {
      await getProductsByCategoryHandler();
      setFirstRender(true);
    }
  }, [firstRender]);

  return (
    <View>
      <View style={styles.titleOuter}>
        <Text style={styles.title}>{pageTitle} </Text>
      </View>

        <FlatList
          data={prodData}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <AdminProduct item={item} navigation={props.navigation}/>}
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
