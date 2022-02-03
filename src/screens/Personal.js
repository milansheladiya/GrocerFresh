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
// import { personalData } from "../Data/data";
import { readAllHandler } from "../Firebase/read";

const { width, height } = Dimensions.get("screen");

const Personal = ({ navigation }) => {
  const [currentState, setCurrentState] = useState("Home");
  const [searchValue, setSearchValue] = useState("");
  const [n1, n2] = React.useState(1);
  const [num, setNum] = React.useState({});
  const [pageData, setPageData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filtered, setFiltered] = useState(false);

  const add = () =>{
    
  }

  const pageType = navigation.state?.params?.type || "Personal";
  // if(pageType == 'cart'){
  //   pageData = []
  // }

  const productReadHandler = async () => {
    const res = await readAllHandler(["grocery", pageType, pageType]);
    console.log(pageType);
    res.forEach((doc) => {
      //console.log(doc.id, " => ", doc.data());
      setPageData((pageData) => [
        ...pageData,
        { ...doc.data(), id: doc.id, category: pageType },
      ]);
    });
  };

  useEffect(() => {
    //const data = personalData[pageType] || [];
    //const data =
    //setPageData(pageData);
    productReadHandler();
  }, [pageType]);

  const increment = (key) => {
    if ((num[key] || 0) < 10) {
      setNum({ ...num, [key]: (num[key] || 0) + 1 });
      n2(n1 + 15);
    } else {
      alert("Maxium Quantity limit");
    }
  };
  const decrement = (key) => {
    if (num[key] > 0) {
      setNum({ ...num, [key]: num[key] - 1 });
      n2(n1 - 15);
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
          placeholder="Search for items"
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

                <Icon
                  name="heart-circle"
                  size={30}
                  color={"red"}
                  onPress={() => console.log("Fav item")}
                  style={{
                    marginHorizontal: 5,
                    zIndex: 3,
                    marginVertical: -106,
                    marginBottom: 80,
                  }}
                />

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
            Alert.alert("Cart Message", "Item added to cart");
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
    zIndex: -3,
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
