import React, { Component } from 'react';
import { 
    StyleSheet 
} from 'react-native';
import { Container, Button, Text, View } from 'native-base';

export default class Home extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <View tyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button full rounded danger
          onPress={() => {this.props.navigation.navigate('Input Data')}}>
              <Text>ADD HOBBY</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#FEDBD0',
        justifyContent: 'center',
        alignContent: "center",
        alignItems: 'center'
      },
})