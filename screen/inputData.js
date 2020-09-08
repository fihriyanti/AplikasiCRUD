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
import { Container, Input, Item, Button } from 'native-base';
import {} from '@react-navigation/native'


import axios from 'axios';


export default class InputData extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        hobby: '',
        age:'',
    }
}

onSubmit = () => {
  const exercises = {
      name: this.state.name,
      hobby: this.state.hobby,
      age: this.state.age,
  }

  console.log(' Data ',exercises);

  axios.post('http://192.168.1.7:5000/exercises/add', exercises)
  .then(res => console.log(res.data))
}

  render(){
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView>
            <Container style={styles.container}>
                <View>
                  <Text style={styles.judul}> 
                    What is your Hobby?
                  </Text>
                </View>
                <View style={{marginTop: 10}}>
                  <Item style={styles.atas} rounded>
                    <Input style={styles.input} 
                    placeholder='Your Name'
                    onChangeText={name => this.setState({name: name})}
                    value={this.state.name}>
                  </Input>
                  </Item>
                </View>
                <View>
                  <Item style={styles.atas} rounded>
                    <Input style={styles.input} 
                    placeholder='Your Hobby'
                    onChangeText={hobby => this.setState({hobby: hobby})}
                    value= {this.state.hobby}>
                    </Input>
                  </Item>
                </View>
                <View>
                  <Item style={styles.atas} rounded>
                    <Input style={styles.input} 
                    keyboardType='numeric'
                    placeholder='Your Age'
                    onChangeText={age => this.setState({age})}
                    value = {this.state.age}>
                  </Input>
                  </Item>
                </View>
                <View style={styles.tombol}>
                  <Button full rounded styles={styles.tombol} 
                  onPress={() => {
                    this.onSubmit();
                    this.props.navigation.navigate('Read')
                  }}> 
                    <Text style={styles.text}>SUBMIT</Text>
                  </Button>
                </View>
                <View style={styles.tombol}>
                  <Button full rounded styles={styles.tombol} 
                  onPress={() => {this.props.navigation.navigate('Read')}}> 
                    <Text style={styles.text}>READ DATA</Text>
                  </Button>
                </View>
            </Container>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    backgroundColor: '#FEDBD0',
    alignContent: 'center',
  },
  judul: {
    marginTop: 20,
    fontSize: 30,
    alignSelf: 'center',
    color: '#01579b',
    fontFamily: 'serif'
  },
  atas : {
    backgroundColor : "#fff",
    marginTop : 10, 
    marginLeft: 10, 
    marginRight: 10,
  },
  tombol: {
    marginTop : 20, 
    marginLeft: 10, 
    marginRight: 10,      
  },
  
  tombol1: {
    marginTop : 30, 
    marginLeft: 10, 
    marginRight: 10,      
  },
  input: {
    fontSize: 15
  },
  text: {
      fontSize: 20,
      color: '#fff'
  }
});

