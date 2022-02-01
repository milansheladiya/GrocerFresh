import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { readAllHandler, readAllWithId } from "../Firebase/read";
import { auth } from "../Firebase/auth";
import { getFirestore } from "firebase/firestore";
import {UpdateDocuments} from "../Firebase/update";

const { width, height } = Dimensions.get("screen");

const Personal = ({ navigation }) => {

  const [currentState, setCurrentState] = useState("Home");
  const [searchValue, setSearchValue] = useState("");
  const [n1, n2] = useState(1);
  const [num, setNum] = useState({});
  const [pageData, setPageData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [firstRender, setFirstRender] = useState(false);

  const db = getFirestore();

  useEffect(()=>{
      console.log("use Effect Cart List : ",cartList);
      cartList.forEach((doc) => {
        setNum((num) => ({ ...num, [doc.id]: doc.quantity }));
      });
  },[cartList]);

  // add to cart Screen
  //action,id,category,quantity
  const getCartDataFromFirebase = async () => {
    let carts = await readAllWithId(["customers", auth.currentUser.uid]);
    //---console.log("second......");
    carts.data().cart.forEach((doc) => {
      //console.log("Each cart details :" ,doc);
      setCartList((cartList) => [...cartList, { ...doc }]);
    });
    
    //synchronizCart();
  };


  const synchronizCart = ( id, category, quantity) => {
    let tmp = [];
    if(quantity === 0)
    {
       tmp = cartList.filter((cart) => cart.id !== id);
      setCartList(tmp);
      return;
    }

    let IsProductExistFlag = false;
     tmp = cartList.map((doc) => {
      //---console.log(doc.id," === ",id);
      console.log(doc.category," == category == ",category);
      if(doc.category !== category)
      {
        return doc;
      }
      else
      {
        console.log(doc.id," == Vs == ",id);
        if (doc.id === id) {
          console.log("match Id ....");
          doc.quantity = quantity;
          IsProductExistFlag = true;
          return doc;
        } else {
          console.log("didn't match Id ....");
          return doc;
        }
      }
    });
    if(!IsProductExistFlag)
    {
      tmp.push({
        "id": id,
        "category": category,
        "quantity": quantity,
      });
    }
    setCartList(tmp);
    //-------console.log("Tmp : " ,tmp);
  };

    const updateCartToFirebase = async () => {
      console.log("Final Update to Firebase : ", cartList);
        await UpdateDocuments(["customers",auth.currentUser.uid],{
          "cart":cartList
        });
        Alert.alert("Cart Message", "Cart has been updated!");
    };

  const pageType = navigation.state?.params?.type || "Personal";

  const productReadHandler = async () => {
    const res = await readAllHandler(["grocery", pageType, pageType]);
    //----console.log("First calling.....");
    //-----console.log("category : ",pageType);
    const tmpProdArray = [];
    res.forEach((doc) => {
       // ----console.log(doc.id, " => ", doc.data());
       tmpProdArray.push({ ...doc.data(), id: doc.id, category: pageType });
    });
    setPageData((pageData) => [
      ...tmpProdArray
    ]);
    getCartDataFromFirebase();
  };

  useEffect(() => {
      console.log("first Use effect calling");
      productReadHandler();

  }, [pageType]);

  const increment = (key) => {
    if ((num[key] || 0) < 10) {
      setNum({ ...num, [key]: (num[key] || 0) + 1 });
      n2(n1 + 15);
      //synchronizCart()
      //console.log(num[key] == undefined ? 0 : num[key]+1);
      console.log(num);
      synchronizCart(key,pageType,((num[key] || 0) + 1));
    } else {
      alert("Maxium Quantity limit");
    }
  };
  const decrement = (key) => {
    if (num[key] > 0) {
      setNum({ ...num, [key]: num[key] - 1 });
      n2(n1 - 15);
      synchronizCart(key,pageType,((num[key] || 0) - 1));
    } else {
      setNum(0);
    }
  };

  const handleSearch = () => {
    let newData = [];
    if (searchValue) {
      newData = pageData.filter(
        (e) =>
          e.name && e.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log(searchValue, newData);
      setFiltered(true);
    } else {
      setFiltered(false);
    }
    setFilteredData(newData);
  };

  const finalData = filtered ? filteredData : pageData;
  //console.log(pageType);
  return (
    <View
      style={{
        flex: 1,
        width: width,
        height: height,
      }}
    >
      <View
        style={{
          marginTop: -30,
          width: Dimensions.get("window").width,
          backgroundColor: "lightblue",
          flexDirection: "row",
          justifyContent: "flex-start",
          zIndex: -1,
          position: "relative",
          paddingTop: 40,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Icon
            name="arrow-back"
            size={30}
            color={"black"}
            style={{ margin: 10 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            width: Dimensions.get("window").width - 90,
            marginHorizontal: "auto",
            marginVertical: 5,
            paddingVertical: 6,
            fontSize: 23,
            color: "white",
            textAlign: "center",
            fontFamily: "Arial",
            color: "black",
            fontWeight: "bold",
            height: 30,
            zIndex: 0,
            textTransform: "uppercase",
          }}
        >
          {pageType}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("CartScreen")}
          style={{ paddingLeft: 10 }}
        >
          <Icon
            name="ios-cart"
            size={30}
            color={"black"}
            style={{ margin: 5, marginHorizontal: -10 }}
          />
        </TouchableOpacity>
      </View>

      {/* Search View */}
      <View
        style={{
          backgroundColor: "white",
          zIndex: 2,
          width: width,
          height: 40,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TextInput
          placeholder=" Search"
          value={searchValue}
          onChangeText={(e) => setSearchValue(e)}
          style={{
            color: "black",
            width: 300,
            height: 30,
            borderRadius: 10,
            borderWidth: 1,
            marginTop: 10,
            padding: 5,
          }}
        />

        <TouchableOpacity onPress={() => handleSearch()}>
          <Icon
            name="ios-search"
            size={30}
            color={"black"}
            style={{
              marginTop: 10,
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          padding: 10,
          backgroundColor: "white",
          width: width,
          height: 50,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SortingScreen", { type: pageType });
          }}
        >
          <Text
            style={{
              fontSize: 20,
              margin: 5,
              fontWeight: "500",
              textAlign: "center",
              position: "fixed",
              color: "black",
            }}
          >
            Sort ↓
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("FilterScreen", { type: pageType })
          }
        >
          <Text
            style={{
              fontSize: 20,
              position: "fixed",
              margin: 5,
              marginLeft: "70%",
              fontWeight: "500",
              textAlign: "center",
              color: "black",
            }}
          >
            Filters
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{
          width: width,
          height: height,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            margin: 10,
            flexWrap: "wrap",
          }}
        >
          {finalData.length ? (
            finalData.map((data) => (
              <View
                key={data.id}
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  margin: 2,
                  borderRadius: 10,
                  marginBottom: 10,
                  width: 180,
                  height: 230,
                }}
              >
                <TouchableOpacity
                  onPress={() => Alert.alert("Message", data.description)}
                >
                  <Image source={{ uri: data.url }} style={styles.imagestyle} />
                </TouchableOpacity>

                <View
                  style={{
                    width: 120,
                    height: 100,
                    marginBottom: 2,
                    flexDirection: "row",
                    backgroundColor: "transparent",
                    justifyContent: "center",
                    display: "flex",
                    margin: 10,
                    alignSelf: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignSelf: "center",
                      width: 150,
                      height: 50,
                      marginBottom: 60,
                    }}
                  >
                    <Text style={styles.textstyle}>{data.name}</Text>
                    <Text style={styles.ratestyle}>$ {data.price}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderRadius: 10,
                        justifyContent: "center",
                        marginTop: 2,
                        height: 40,
                      }}
                    >
                      <Icon
                        name="ios-remove-circle"
                        size={30}
                        onPress={() => decrement(`${data.id}`)}
                        color={"#1C6DD0"}
                      />
                      <Text
                        style={{
                          paddingHorizontal: 15,
                          fontSize: 20,
                          color: "black",
                        }}
                      >
                        {num[`${data.id}`] || [0]}
                      </Text>
                      <Icon
                        name="ios-add-circle"
                        size={30}
                        onPress={() => increment(`${data.id}`)}
                        color={"#1C6DD0"}
                      />
                      <Icon
                        name="heart"
                        size={25}
                        color={"red"}
                        style={{ marginHorizontal: 2 }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <Text>No results found!</Text>
          )}
        </View>
      </ScrollView>

      <View
        style={{
          paddingBottom: 25,
          backgroundColor: "lightblue",
        }}
      >
        <Button
          style={{
            width: 100,
            height: 100,
            marginHorizontal: 10,
            marginVertical: 10,
            paddingBottom: 10,
          }}
          title="Add To Cart"
          color={"black"}
          onPress={() => {
            updateCartToFirebase();
          }}
        />
      </View>

      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagestyle: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#000",
    shadowOpacity: 1,
    backgroundColor: "#000",
    alignSelf: "center",
  },

  textstyle: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0C090A",
    marginBottom: 5,
  },
  ratestyle: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 5,
  },
});

export default Personal;
