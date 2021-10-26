import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CardInformation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>E-Learning Kampus</Text>
    </View>
  );
};

export default CardInformation;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 50,
    marginHorizontal: 30,
    marginTop: 30,
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
  textStyle:{
    fontSize: 25,
    fontWeight:"bold"
  }
});
