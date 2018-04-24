import React, { Component } from 'react';
import {
  Text,
  AsyncStorage,
  View
} from 'react-native';
import { Button } from 'nachos-ui';

import Header from '../component/shared/header';

class Dashboard extends Component {
  render() {
    const { params } = this.props.navigation.state;
    
    return (
      <View style={styles.container}>
        <Header navigate={this.props.navigation.navigate} />

        <Text style={styles.welcome}>
          Welcome to dashboard!
        </Text>
        <Text style={styles.instructions}>
          { params && params.walletAddress }
        </Text>

        <Button onPress={() => 
          this.props.navigation.navigate('Delegates')
        }>
          Delegates
        </Button>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

export default Dashboard;
