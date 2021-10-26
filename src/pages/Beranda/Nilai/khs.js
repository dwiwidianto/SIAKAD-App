import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { CardNilai } from "../../../components";
import { Badge } from "react-native-paper";

const KHS = () => {
  const data = [
    { ruangan: "Lab Akutansi Dasar", sks: "3 SKS", type: "Regular J", nilai: "nilai", nilai_pecahan: "75", grade: "A-" },
    { ruangan: "Lab Akutansi Dasar", sks: "3 SKS", type: "Regular J", nilai: "nilai", nilai_pecahan: "75", grade: "A-" },
    { ruangan: "Lab Akutansi Dasar", sks: "3 SKS", type: "Regular J", nilai: "nilai", nilai_pecahan: "75", grade: "A-" },
    { ruangan: "Lab Akutansi Dasar", sks: "3 SKS", type: "Regular J", nilai: "nilai", nilai_pecahan: "75", grade: "A-" },
    { ruangan: "Lab Akutansi Dasar", sks: "3 SKS", type: "Regular J", nilai: "nilai", nilai_pecahan: "75", grade: "A-" },
    { ruangan: "Lab Akutansi Dasar", sks: "3 SKS", type: "Regular J", nilai: "nilai", nilai_pecahan: "75", grade: "A-" },
    { ruangan: "Lab Akutansi Dasar", sks: "3 SKS", type: "Regular J", nilai: "nilai", nilai_pecahan: "75", grade: "A-" },
    { ruangan: "Lab Akutansi Dasar", sks: "3 SKS", type: "Regular J", nilai: "nilai", nilai_pecahan: "75", grade: "A-" },
    { ruangan: "Lab Akutansi Dasar", sks: "3 SKS", type: "Regular J", nilai: "nilai", nilai_pecahan: "75", grade: "A-" },
  ];
  return (
    <View>
      <ScrollView>
        <CardNilai />
        <View style={styles.cardTitle}>
          <View style={styles.textLayout}>
            <Text style={styles.textStyle}>Mata Kuliah</Text>
            <Text style={styles.textStyle}>Nilai</Text>
          </View>
        </View>
        {data.map((data) => (
          <View style={styles.cardList}>
            <View style={styles.textListLayout}>
              <View>
                <Text style={{ marginLeft: 10 }}>{data.ruangan}</Text>
                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                  <Text style={{ marginRight: 10 }}>{data.sks}</Text>
                  <Text>|</Text>
                  <Text style={{ marginLeft: 10 }}>{data.type}</Text>
                </View>
              </View>
              <View style={styles.textnilai}>
              <Text style={{ marginRight: 7 }}>{data.nilai}</Text>
              <Text style={{ marginRight: 7, fontWeight: "bold" }}>|</Text>
              <Badge>{data.grade}</Badge>
              <Text style={{ marginLeft: 7, marginRight: 7 }}>{data.nilai_pecahan}</Text>
            </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default KHS;
const styles = StyleSheet.create({
  cardTitle: {
    backgroundColor: "white",
    justifyContent: "center",
    padding: 10,
    height: 50,
    marginTop: 10,
  },
  textLayout: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textStyle: {
    fontSize: 20,
    color: "black",
  },
  // list Card
  cardList: {
    backgroundColor: "white",
    padding: 10,
    height: 60,
    marginTop: 3,
  },
  textListLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  textnilai: {
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: 20,
  },
});
