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
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Container, Button } from 'native-base';

import axios from 'axios';

export default class App extends Component {

    onSubmit = () => {
        const exercises = {
            name: this.state.name,
            hobby: this.state.hobby,
            age: this.state.age,
        }
    
        console.log('Data',exercises);
    
        axios.post('http://192.168.1.6:5000/exercises/add', exercises)
        .then(res => console.log(res.data))
    }

    render(){
        return (
            <>
              <StatusBar barStyle="dark-content" />
              <SafeAreaView>
                  <Container style={styles.container}>
                      <View>
                          <Button styles={styles.tombol} full rounded onPress={this.onSubmit}> 
                            <Text style={styles.text}>SUBMIT</Text>
                          </Button>
                      </View>
                  </Container>
              </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    backgroundColor: '#FEDBD0',
    alignContent: 'center'
  },
  tombol: {
    alignSelf: 'center',
    marginTop : 10, 
    marginLeft: 10, 
    marginRight: 10,      
  },
  text: {
      fontSize: 20,
      color: '#fff'
  }
});
