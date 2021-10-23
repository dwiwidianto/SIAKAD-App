import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { IconProfile, IconProfileActive, IconHome, IconHomeActive, IconOverview, IconOverviewActive, IconNotification, IconNotificationActive } from "../../assets";

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
    if (label === "Beranda") return isFocused ? <IconHomeActive /> : <IconHome />;
    if (label === "Overview") return isFocused ? <IconOverviewActive /> : <IconOverview />;
    if (label === "Notifikasi") return isFocused ? <IconNotificationActive /> : <IconNotification />;
    if (label === "Profile") return isFocused ? <IconProfileActive /> : <IconProfile />;

    return <IconHome />;
  };
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: (isFocused) => ({
    fontSize: 11,
    marginTop: 3,
  }),
});
