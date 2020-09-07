/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
// import { Container, Input, Item, Button } from 'native-base';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import read from './screen/read';
import inputData from './screen/inputData';

const Stack = createStackNavigator();

export default class App extends Component {
  render(){
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Input Data" component={inputData} />
          <Stack.Screen name="Read" component={read} />
          {/* <Stack.Screen name="Update" component={UpdateActivity} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }  
}

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   container: {
//     backgroundColor: '#FEDBD0',
//     alignContent: 'center'
//   },
//   judul: {
//     marginTop: 20,
//     fontSize: 30,
//     alignSelf: 'center',
//     color: '#01579b',
//   },
//   atas : {
//     backgroundColor : "#fff",
//     marginTop : 10, 
//     marginLeft: 10, 
//     marginRight: 10,
//   },
//   tombol: {
//     marginTop : 20, 
//     marginLeft: 10, 
//     marginRight: 10,      
//   },
  
//   tombol1: {
//     marginTop : 30, 
//     marginLeft: 10, 
//     marginRight: 10,      
//   },
//   input: {
//     fontSize: 15
//   },
//   text: {
//       fontSize: 20,
//       color: '#fff'
//   }
// });

