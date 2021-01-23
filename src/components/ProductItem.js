import React, { useContext, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import CustomAlert from "./CustomAlert";
import { Context } from "../context/OrderContext";

function ProductItem({ item }) {
  const { addOrder } = useContext(Context);
  console.log(item);
  const addedSuccessfully = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  };
  return (
    <View style={styles.listItem}>
      <View style={{ alignItems: "center", flex: 1 }}>
        <Image
          source={{ uri: item.productImage }}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
        <View style={{ alignItems: "center", flex: 1, margin: 10 }}>
          <Text style={{ fontWeight: "bold" }}>{item.productName}</Text>
          <Text style={{ margin: 5 }}>{item.productDescription}</Text>
          <Button
            style={styles.orderNow}
            title="Order Now"
            onPress={() => {
              addOrder(item._id, item.productName);
            }}
          />
          {/* <CustomAlert alertText="Do you want to order?" /> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  title: {
    fontSize: 32,
  },
  view: {
    alignItems: "center",
    flex: 1,
  },
  textItem: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
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
  orderNow: {
    marginTop: 20,
  },
});

export default ProductItem;
