import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

// Components
import Header from '../shared/header';

class Delegates extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header navigate={this.props.navigation.navigate} />

        <Text style={styles.welcome}>
          Delegates
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};

export default Delegates;
