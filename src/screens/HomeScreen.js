import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";
import VegesP from "../../assets/VegesH.png";
import fruits from "../../assets/fruitsD.png";
import meat from "../../assets/meatD.png";
import frozen from "../../assets/frozenD.png";
import bakery from "../../assets/bakeryD.png";
import dairy from "../../assets/personalD.png";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTabNavigator from "../components/BottomTabNavigator";

const { width, height } = Dimensions.get("screen");

const saleproduct = [
  "https://i.ytimg.com/vi/aRS2WPiExQQ/maxresdefault.jpg",
  "https://www.accuform.com/files/damObject/Image/huge/MGNF909.jpg",
  "https://www.fda.gov/files/covid_foodretail_bestpractices_header.png",
];
const deals = [
  "https://us.123rf.com/450wm/elenabsl/elenabsl1603/elenabsl160300017/54060490-grocery-shopping-discount-paper-shopping-bag-filled-with-vegetables-fruits-and-other-products.jpg?ver=6",
  "https://cdn.static-zoutons.com/images/originals/coupon-category/Grocery_Deals_1588267949.jpg",
  "https://www.baapoffers.com/uploads/grofers-get-30-cashback-on-grocery.jpg",
  "https://cdn.grabon.in/gograbon/images/web-images/uploads/1618548899692/groceries-offers.jpg",
];

const HomeS = ({ navigation }) => {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowmenu] = useState(false);
  const [deal, setDeal] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slider = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slider != activeImage) {
        setActiveImage(slider);
      }
    }
  };

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
          }}
        >
          Grocer Fresh
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
          <Icon
            name="ios-cart"
            size={30}
            color={"black"}
            style={{ margin: 5, marginHorizontal: -50 }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: Dimensions.get("window").width,
          height: height,
          backgroundColor: "white",
        }}
      >
        {/* View1 */}

        <View
          style={{
            width: Dimensions.get("window").width,
            height: 350,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: "auto",
          }}
        >
          <ScrollView style={{ marginLeft: 5 }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Personal", { type: "vegetables" })
              }
            >
              <Image style={styles.imagestyle} source={VegesP} />
            </TouchableOpacity>

            <View
              style={{
                marginLeft: 15,
                width: 110,
                height: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  justifyContent: "center",
                }}
              >
                {" "}
                Vegetables{" "}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Personal", { type: "frozenFood" })
              }
            >
              <Image style={styles.imagestyle} source={frozen} />
            </TouchableOpacity>

            <View
              style={{
                marginLeft: 10,
                width: 110,
                height: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {" "}
                Frozenfood{" "}
              </Text>
            </View>
          </ScrollView>

          {/* View2 */}
          <ScrollView>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Personal", { type: "Fruits" })
              }
            >
              <Image style={styles.imagestyle} source={fruits} />
            </TouchableOpacity>

            <View
              style={{
                marginLeft: 5,
                width: 110,
                height: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                Fruits{" "}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Personal", { type: "bakeryFood" })
              }
            >
              <Image style={styles.imagestyle} source={bakery} />
            </TouchableOpacity>

            <View
              style={{
                marginLeft: 5,
                width: 110,
                height: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                Bakery{" "}
              </Text>
            </View>
          </ScrollView>

          {/* View3 */}
          <ScrollView>
            <TouchableOpacity
              onPress={() => navigation.navigate("Personal", { type: "meat" })}
            >
              <Image style={styles.imagestyle} source={meat} />
            </TouchableOpacity>

            <View
              style={{
                marginLeft: 5,
                width: 110,
                height: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {" "}
                Meat{" "}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("Personal", { type: "dairy" })}
            >
              <Image style={styles.imagestyle} source={dairy} />
            </TouchableOpacity>

            <View
              style={{
                marginLeft: 5,
                width: 110,
                height: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {" "}
                Dairy{" "}
              </Text>
            </View>
          </ScrollView>
        </View>

        {/* saleImage */}
        <SafeAreaView style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "300",
              textAlign: "center",
              margin: 5,
              color: "red",
            }}
          >
            Store Safety
          </Text>
          <View style={{ width: width, height: height * 0.25 }}>
            <ScrollView
              onScroll={({ nativeEvent }) => onchange(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              style={{
                width: width,
                height: height * 0.25,
                borderRadius: 10,
                borderWidth: 1,
              }}
            >
              {saleproduct.map((e, index) => (
                <Image
                  style={{
                    width: width,
                    height: height * 0.25,
                    alignSelf: "center",
                  }}
                  key={e}
                  resizeMode="stretch"
                  source={{ uri: e }}
                />
              ))}
            </ScrollView>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              {saleproduct.map((e, index) => (
                <Text
                  key={e}
                  style={activeImage == index ? styles.dotActive : styles.dot}
                >
                  ⬤
                </Text>
              ))}
            </View>
          </View>
        </SafeAreaView>

        <View
          style={{
            backgroundColor: "white",
            width: width,
            height: 300,
          }}
        >
          <Text
            style={{
              width: Dimensions.get("screen").width,
              height: 30,
              marginTop: 5,
              textAlign: "center",
              fontSize: 25,
              fontWeight: "300",
              color: "red",
              alignSelf: "center",
            }}
          >
            Grocery Deals
          </Text>

          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 10,
              justifyContent: "space-between",
            }}
          >
            <Icon
              name="arrow-back-circle"
              size={30}
              color={"maroon"}
              disa
              onPress={() => {
                if (deal > 0) {
                  setDeal(deal - 1);
                }
              }}
              style={{ marginTop: 75 }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("WeeklyDealScreen")}
            >
              <Image
                source={{ uri: deals[deal] }}
                style={{
                  width: 280,
                  height: 150,
                  alignSelf: "center",
                  marginVertical: 20,
                  borderRadius: 10,
                  borderColor: "black",
                  borderWidth: 2,
                }}
              />
            </TouchableOpacity>
            <Icon
              name="arrow-forward-circle"
              size={30}
              color={"maroon"}
              onPress={() => {
                if (deal < deals.length - 1) {
                  setDeal(deal + 1);
                }
              }}
              style={{ marginTop: 75 }}
            />
          </View>
        </View>
      </ScrollView>
      <BottomTabNavigator navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  imagestyle: {
    width: 100,
    height: 100,
    margin: 10,
    borderColor: "black",
    backgroundColor: "lightgray",
    borderRadius: 10,
    borderWidth: 1,
  },
  dotActive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "grey",
  },
});

export default HomeS;
