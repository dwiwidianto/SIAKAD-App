import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { IconCalendar } from "../../assets/";
import { COLOR_CARD } from "../../utils/constantColor";

const index = ({ title, onPress,  }) => {
  const Icon = () => {
    if (title === "Jadwal") return <IconCalendar />;
    if (title === "Presensi") return <IconCalendar />;
    if (title === "Nilai") return <IconCalendar />;
    if (title === "Biaya Kuliah") return <IconCalendar />;
    if (title === "KRS") return <IconCalendar />;
    if (title === "EDOM") return <IconCalendar />;
    return <IconCalendar />
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

export default index;

const styles = StyleSheet.create({
  contianer: {
    marginBottom: 12,
    marginRight: 30
  },
  button: {
    backgroundColor: COLOR_CARD,
    padding: 12,
    borderRadius: 20,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
  },
});
