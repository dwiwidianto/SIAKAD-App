// In App.js in a new project

import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router'
const App = () => {
  return (
    <View style={styles.conatiner}>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: 'white',
    flex: 1
  }
})
