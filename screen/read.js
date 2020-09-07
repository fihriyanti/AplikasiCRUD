/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component} from 'react';
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
import { Container, Button} from 'native-base';

export default class App extends Component {

    render(){
        return (
            <>
              <StatusBar barStyle="dark-content" />
              <SafeAreaView>
                  <Container style={styles.container}>
                      <View>
                          <Button styles={styles.tombol} full rounded> 
                            <Text style={styles.text}>READ DATA</Text>
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
