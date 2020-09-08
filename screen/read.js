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
} from 'react-native';

import {Header, Title, ActionSheet, Content, CardItem, Card} from 'native-base';

import axios from 'axios';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SwipeListView } from 'react-native-swipe-list-view';

var PILIH = [
  { text: "EDIT", icon: "aperture", iconColor: "#ea943b"},
  { text: "DELETE", icon: "trash", iconColor: "#fa213b"},
  { text: "CANCEL", icon: "close", iconColor: "#25de5b"}
]

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        name: [],
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
    this.setState({name:name})
    console.log(name)
  })
  .catch((error) => {
    console.log(error);
  })
}

componentDidUpdate(){
  this.getdata();
}

createTwoButtonAlert(id, name, hobby, age) {
  Alert.alert(
      "Action",
      "Select Action",
      [
          {
              text: "Cancel",
              onPress: () => console.log("Ask me later pressed")
          },
          {
              text: "EDIT",
              onPress: () => {
                  this.props.navigation.navigate('Update', { ID: id, NAMA: name, HOBBY: hobby, AGE: age });
              },
              style: "cancel"
          },
          {
              text: "DELETE", onPress: () => {
                  axios.delete(`http://192.168.1.7:5000/exercises/${id}`).then(res => console.log(res.data));
                  this.getdata()
              }
          }
      ],
      { cancelable: false }
  );
}

// keyExtractor = (item, index) => index.toString()

    render(){
        return (
          <View style={styles.container}>
                <Header style={styles.header}>
                    <Title style={{alignSelf: 'center'}}>DATA HOBBY</Title>
                </Header>
                  <SwipeListView
                    keyExtractor={(item) => item._id}
                    data={this.state.name}
                    renderItem={({item}) => (
                      <TouchableHighlight
                        onPress={() => {
                          console.log(item._id);
                          this.createTwoButtonAlert(item._id, item.name, item.hobby, item.age)
                          }
                        }
                        style={styles.rowFront}>
                        <Content>
                          <Card>
                            <CardItem>
                            <Text>{item.name}{"\n"}{item.hobby}{"\n"}{item.age}</Text>
                            </CardItem>
                          </Card>                        
                        </Content>
                      </TouchableHighlight>)}
                  />
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEDBD0',
    alignItems: 'stretch'
  },
  header: {
    alignContent: 'center',
  },
  rowFront: {
      justifyContent: 'flex-start',
      paddingLeft: 10,
      paddingRight: 10,
      height: 85,
  },
});
