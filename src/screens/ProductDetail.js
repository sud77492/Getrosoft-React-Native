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
import { HeaderBackButton } from "react-navigation-stack";

const ProductDetail = ({ navigation }) => {
  //console.warn(navigation);
  const { addOrder } = useContext(Context);
  let data = navigation.state.params.item;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center", marginHorizontal: 30 }}>
          <Image
            style={styles.productImg}
            source={{
              uri: data.productImage,
            }}
          />
          <Text style={styles.name}>{data.productName}</Text>
          <Text style={styles.price}>{data.productPrice}</Text>
          <Text style={styles.description}>{data.productDescription}</Text>
        </View>
        <View style={styles.contentColors}>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: "#00BFFF" }]}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: "#FF1493" }]}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: "#00CED1" }]}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: "#228B22" }]}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: "#20B2AA" }]}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: "#FF4500" }]}
          ></TouchableOpacity>
        </View>
        <View style={styles.contentSize}>
          <TouchableOpacity style={styles.btnSize}>
            <Text>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>L</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>XL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.addToCarContainer}>
          <TouchableOpacity
            style={styles.shareButton}
            onPress={() => {
              addOrder(data._id, data.productName);
            }}
          >
            <Text style={styles.shareButtonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

ProductDetail.navigationOptions = ({ navigation }) => {
  return {
    //header: () => false,
    headerLeft: (
      <HeaderBackButton onPress={() => navigation.navigate("Home")} />
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
    marginTop: 10,
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    marginTop: 10,
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

export default ProductDetail;
