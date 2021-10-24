import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Aktivitas = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textLayout}>
        <View style={styles.mainLabel}>
          <View>
            <View>
              <Text>2019/2020 Genap</Text>
            </View>
            <View>
              <Text>Aktif</Text>
            </View>
          </View>
          <View style={{ alignItems: "center", marginLeft: 100 }}>
            <Text>3.42</Text>
            <Text>IPS</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>3.82</Text>
            <Text>IPK</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 9,
            borderBottomColor: "#E8E1D9",
            borderBottomWidth: 1,
          }}
        />
        <View style={{justifyContent: "space-between", flexDirection: 'row', marginTop: 3}}>
          <View>
            <Text style={{color: "#F8DF8B"}}>SKS Total 64</Text>
          </View>
          <View>
            <Text>SKS Semester 24</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Aktivitas;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "flex-start",
    marginHorizontal: 10,
    height: 100,
    padding: 20,
    marginTop: 10,
    borderRadius: 8,
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
    justifyContent: "flex-start",
  },
  mainLabel: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
