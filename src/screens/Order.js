import React, { useContext, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/OrderContext";
import { navigate } from "../navigationRef";
import { MaterialIcons } from "@expo/vector-icons";
import OrderItem from "../components/OrderItem";
import OptionsMenu from "react-native-option-menu";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import moment from "moment";

const Order = ({ navigation }) => {
  const { state, deleteBlogPost, getOrders } = useContext(Context);
  useEffect(() => {
    getOrders();

    const listener = navigation.addListener("didFocus", () => {
      getOrders();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={state}
        keyExtractor={(blogPost) => blogPost.name}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <OrderItem item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

Order.navigationOptions = {
  title: "Order",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  title: {
    fontSize: 32,
  },
  textItem: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
  listItemRed: {
    margin: 10,
    padding: 10,
    backgroundColor: "red",
    width: "90%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  listItemGreen: {
    margin: 10,
    padding: 10,
    backgroundColor: "green",
    width: "90%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: "white",
    borderStyle: "solid",
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 22,
    backgroundColor: "#03A9F4",
    borderRadius: 30,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 40,
    color: "white",
  },
});

export default Order;
