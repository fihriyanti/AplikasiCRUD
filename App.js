/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screen/Home';
import read from './screen/read';
import inputData from './screen/inputData';
import update from './screen/update';

const Stack = createStackNavigator();

export default class App extends Component {
  render(){
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Input Data" component={inputData} />
          <Stack.Screen name="Read" component={read} />
          <Stack.Screen name="Update" component={update} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }  
}

