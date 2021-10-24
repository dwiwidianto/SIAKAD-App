import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CardNilai = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textLayout}>
        <View style={styles.textStart}>
          <Text style={{marginBottom: 15, fontSize: 25 }}>0</Text>
          <Text>SKS Semester</Text>
        </View>
        <View style={styles.text}>
          <Text style={{marginBottom: 15, fontSize: 25 }}>0</Text>
          <Text>IP Semester</Text>
        </View>
        <View style={styles.textEnd}>
          <Text style={{marginBottom: 15, fontSize: 25 }}>0</Text>
          <Text>IP Kumulatif</Text>
        </View>
      </View>
    </View>
  );
};

export default CardNilai;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    marginHorizontal: 10,
    height: 100,
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
  textLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
  },
  textStart: {
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textEnd: {
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
