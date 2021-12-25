import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './src/screens/HomeScreen'
import CartScreen from "./src/screens/CartScreen";

const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    CartScreen: CartScreen,
  },
  {
    initialRouteName: "CartScreen",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);