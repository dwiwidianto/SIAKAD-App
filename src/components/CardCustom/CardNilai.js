import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CardNilai = () => {
  return (
    <View style={styles.container}>
      <Text>E-Learning Kampus</Text>
    </View>
  );
};

export default CardNilai;

const styles = StyleSheet.create({
  container: {
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
});
