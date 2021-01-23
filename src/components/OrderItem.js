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
import moment from "moment";
import { navigate } from "../navigationRef";

function OrderItem({ item }) {
  var date1 = new Date();
  var time1 = moment(date1).format("YYYY-MM-DD");
  var time2 = moment(item.orderDate).format("YYYY-MM-DD");
  return (
    <View style={styles.listItem}>
      <View style={{ alignItems: "center", flex: 1 }}>
        <View style={{ alignItems: "center", flex: 1 }}>
          <Text style={{ fontWeight: "bold" }}>{item.productName}</Text>
          <Text style={{ margin: 10 }}>
            {time1 === time2 ? "Pending" : "On the way"}
          </Text>
        </View>
        <View>
          <Button title="TRACK" onPress={() => navigate("Track", item)} />
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
});

export default OrderItem;
