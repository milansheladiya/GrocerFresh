import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './src/screens/HomeScreen'
import SignupScreen from "./src/screens/SignupScreen";

const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    SignupScreen:SignupScreen
  },
  {
    initialRouteName: "SignupScreen",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);