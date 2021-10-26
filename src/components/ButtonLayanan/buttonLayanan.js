import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { IconJadwal, IconPresensi, IconNilai, IconBiayaKuliah, IconKRS, IconEdom } from "../../assets/";
import { COLOR_CARD } from "../../utils/constantColor";

const ButtonLayanan = ({ title, onPress,  }) => {
  const Icon = () => {
    if (title === "Jadwal") return <IconJadwal />;
    if (title === "Presensi") return <IconPresensi />;
    if (title === "Nilai") return <IconNilai />;
    if (title === "Biaya Kuliah") return <IconBiayaKuliah />;
    if (title === "KRS") return <IconKRS />;
    if (title === "EDOM") return <IconEdom />;
    return <IconJadwal />
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.contianer}>
      <View style={styles.button}>
        <Icon />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLayanan;

const styles = StyleSheet.create({
  contianer: {
    marginBottom: 20,
    marginRight: 30,
  },
  button: {
    backgroundColor: COLOR_CARD,
    padding: 12,
    borderRadius: 20,
  },
  text: {
    marginTop: 7,
    fontSize: 14,
    textAlign: "center",
  },
});
