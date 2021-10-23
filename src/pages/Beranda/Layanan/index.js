import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function KHS({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>KHS</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate("Beranda")} />
    </View>
  );
}

function Aktivitas() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Aktivitas</Text>
    </View>
  );
}

function Transkip() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Transkip</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const route = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="KHS" component={KHS} />
      <Tab.Screen name="Aktivitas" component={Aktivitas} />
      <Tab.Screen name="Transkip" component={Transkip} />
    </Tab.Navigator>
  );
};

const nilai = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="route" component={route} options={{ headerShown: false}} />
    </Stack.Navigator>
  );
};

export default nilai;

const styles = StyleSheet.create({});
