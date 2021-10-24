import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import KHS from "./khs";
import Aktivitas from "./aktivitas";
import Transkip from "./transkip";

const Tab = createMaterialTopTabNavigator();
const Nilai = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="KHS" component={KHS} />
      <Tab.Screen name="Aktivitas" component={Aktivitas} />
      <Tab.Screen name="Transkip" component={Transkip} />
    </Tab.Navigator>
  );
};

export default Nilai;

const styles = StyleSheet.create({});
