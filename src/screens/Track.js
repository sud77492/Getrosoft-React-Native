import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from "react-native";
import { Context } from "../context/OrderContext";
import { navigate } from "../navigationRef";
import moment from "moment";
import { HeaderBackButton } from "react-navigation-stack";

const Track = ({ navigation }) => {
  console.warn(navigation.state.params.productName);
  const { cancelOrder } = useContext(Context);
  let data = navigation.state.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center", marginHorizontal: 30 }}>
          <Text style={styles.name}>{data.productName}</Text>
          <Text style={styles.price}>SHIPPING NO - {data.NumberShipped}</Text>
          <Text style={styles.description}>STATUS - {data.orderStatus}</Text>
          <Text style={styles.price}>
            WILL DELIVER ON :
            {moment(data.orderDate).add(5, "days").format("DD/MMM/YYYY")}
          </Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.addToCarContainer}>
          <TouchableOpacity
            style={styles.shareButton}
            onPress={() => {
              cancelOrder(data._id);
            }}
          >
            <Text style={styles.shareButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

Track.navigationOptions = ({ navigation }) => {
  return {
    //header: () => false,
    headerLeft: (
      <HeaderBackButton onPress={() => navigation.navigate("Order")} />
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 24,
    color: "#696969",
    fontWeight: "bold",
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 18,
    color: "#696969",
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: "#778899",
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: "white",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  starContainer: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  contentColors: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  contentSize: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: "#eeeeee",
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
});

export default Track;
