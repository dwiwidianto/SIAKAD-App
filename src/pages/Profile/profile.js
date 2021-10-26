import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-paper';

const Profile = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.navigate("LoginScreen")}>Log Out</Button>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
