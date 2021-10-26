import React from "react";
import { Dimensions, StyleSheet, Text, View, Image, Button } from "react-native";
import { IconUkrida, BoyIcon } from "../../assets/images";
import { CardTotalKuliah, CardInformation, ButtonLayanan } from "../../components";

const Beranda = ({navigation}) => {
  return (
    <>
      <View style={styles.page}>
        <View style={styles.logoKampus}>
          <Image source={IconUkrida} style={styles.imageSize} />
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
        <CardTotalKuliah />
        <CardInformation />
      </View>
      <View style={styles.layanan}>
        <View style={styles.iconLayanan}>
          <ButtonLayanan title="Jadwal" />
          <ButtonLayanan title="Presensi"/>
          <ButtonLayanan title="Nilai" onPress={() => navigation.navigate("Nilai")}/>
          <ButtonLayanan title="Biaya Kuliah"/>
          <ButtonLayanan title="KRS"/>
          <ButtonLayanan title="EDOM"/>
        </View>
      </View>
    </>
  );
};

export default Beranda;

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
  layanan: {
    paddingLeft: 30,
    paddingTop: 20,
  },
  iconLayanan: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    flexWrap: 'wrap'
  },
});
