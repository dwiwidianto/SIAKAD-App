import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Beranda, Profile, Overview, Notifikasi, Login} from '../pages/';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ButtomNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Beranda" component={Beranda} options={{headerShown: false}} />
      <Tab.Screen name="Overview" component={Overview} options={{headerShown: false}} />
      <Tab.Screen name="Notifikasi" component={Notifikasi} options={{headerShown: false}} />
      <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="ButtonNav">
      
      <Stack.Screen
        name="ButtomNav"
        component={ButtomNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
