import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CardInfomation = () => {
  return (
    <View style={styles.container}>
      <Text>IP Kumulatif</Text>
    </View>
  );
};

export default CardInfomation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 35,
    marginHorizontal: 30,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
