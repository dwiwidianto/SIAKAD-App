import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Beranda, Profile, Overview, Notifikasi, LoginScreen, Nilai} from "../pages/";
import { ButtonNavigator } from "../components";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ButtomNav = () => {
  return (
    <Tab.Navigator tabBar={(props) => <ButtonNavigator {...props} />}>
      <Tab.Screen name="Beranda" component={Beranda} options={{ headerShown: false }} />
      <Tab.Screen name="Overview" component={Overview} options={{ headerShown: false }} />
      <Tab.Screen name="Notifikasi" component={Notifikasi} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};


const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ButtomNav" component={ButtomNav} options={{ headerShown: false }} />
      <Stack.Screen name="Nilai" component={Nilai} options={{ headerShown: true}}/>
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
