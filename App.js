import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { setNavigator } from "./src/navigationRef";
import Icon from "react-native-vector-icons/FontAwesome";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import SigninScreen from "./src/screens/SigninScreen";
import Home from "./src/screens/Home";
import Track from "./src/screens/Track";
import Order from "./src/screens/Order";
import ProductDetail from "./src/screens/ProductDetail";
import { Provider as MenuProvider } from "react-native-paper";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as OrderContext } from "./src/context/OrderContext";

const homeList = createStackNavigator({
  Home: Home,
});
const orderList = createStackNavigator({
  Order: Order,
});

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
  }),
  trackDetail: createStackNavigator({
    Track: Track,
  }),
  productDetail: createStackNavigator({
    ProductDetail: ProductDetail,
  }),
  mainFlow: createBottomTabNavigator({
    homeList: {
      screen: homeList,
      navigationOptions: {
        title: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={30} color="#900" />
        ),
      },
    },
    orderList: {
      screen: orderList,
      navigationOptions: {
        title: "Order",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="bars" size={30} color="#900" />
        ),
      },
    },
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <OrderContext>
      <AuthProvider>
        <MenuProvider>
          <App ref={(navigator) => setNavigator(navigator)} />
        </MenuProvider>
      </AuthProvider>
    </OrderContext>
  );
};
