import React from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import { UserIcon, BoyIcon } from "../../assets/images";
import { CardTotalKuliah, CardInformation } from "../../components"

const Home = () => {
  return (
    <>
    <View style={styles.page}>
      <View style={styles.logoKampus}>
        <Image source={UserIcon} style={styles.imageSize} />
      </View>
      <View style={styles.fotoProfile}>
        <View style={styles.textLabel}>
          <Text style={styles.fontStyle}>Nama Mahasiswa</Text>
          <Text style={styles.fontStyle}>Jurusan</Text>
          <Text style={styles.fontStyle}>Nama Kampus</Text>
        </View>
        <Image source={BoyIcon} style={styles.imageSize} />
      </View>
    </View>
    <View>
      <CardTotalKuliah/>
      <CardInformation />
    </View>
    </>
  );
};

export default Home;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  logoKampus: {
    flex: 1,
    justifyContent: "flex-start",
  },
  fotoProfile: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textLabel: {
    marginTop: 30,
  },
  imageSize: {
    margin: 30,
    width: 60,
    height: 60,
  },
  fontStyle: {
    marginRight: -10,
    textAlign: "right",
  },
});

