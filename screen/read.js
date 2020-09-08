/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  ScrollView,
} from 'react-native';

import { Container, Header, Title} from 'native-base';

import axios from 'axios';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SwipeListView } from 'react-native-swipe-list-view';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        name: '',
        modalVisible: false,
    }
}

setModalVisible = (visible) => {
  this.setState({modalVisible: visible});
}

 componentDidMount(){
   this.getdata();
    axios.get('http://192.168.1.7:5000/exercises/')
    .then(response => {
        const name = response.data;
        this.setState({name})
        console.log(name)
    })
    .catch((error) => {
        console.log(error);
    })
}

getdata(){
  axios.get('http://192.168.1.7:5000/exercises/')
  .then(response => {
    const name = response.data;
    this.setState({name})
    console.log(name)
  })
  .catch((error) => {
    console.log(error);
  })
}

componentDidUpdate(){
  this.getdata();
}

deleteHobby(id){
  Alert.alert(
    "WARNING",
    "Are You Sure Want Delete This Data?",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => { 
        axios.delete(`http://192.168.1.7:5000/exercises/${id}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.getdata()})
        } 
      }
    ],
    { cancelable: false }
  );
}

keyExtractor = (item, index) => index.toString()

    render(){
        return (
          <View style={styles.container}>
              <Container style={styles.container}>
                <Header style={styles.header}>
                    <Title >DATA HOBBY</Title>
                </Header>
                  <SwipeListView
                    keyExtractor={this.keyExtractor}
                    data={this.state.name}
                    renderItem={({item}) => (
                      <TouchableHighlight
                        onPress={() => {
                          console.log("ID",item._id)
                          this.setModalVisible(true);
                        }}
                        style={styles.rowFront} 
                        underlayColor={'#EEEEEE'}>
                        <View>
                          <Text>{item.name}</Text>
                          <Text>{item.hobby}</Text>
                          <Text>{item.age}</Text>
                        </View>
                      </TouchableHighlight>)}
                  />
              </Container>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEDBD0',
    alignContent: 'center'
  },
  header: {
    alignItems: 'center',
  },
  rowFront: {
      alignItems: 'flex-start',
      backgroundColor: '#C2B0E0',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      justifyContent: 'flex-start',
      paddingLeft: 20,
      height: 70,
  },
});
