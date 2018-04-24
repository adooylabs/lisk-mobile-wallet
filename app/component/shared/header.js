import React, { Component } from 'react';
import {
  Text,
  AsyncStorage,
  View
} from 'react-native';
import { Button } from 'nachos-ui';

// TODO: this should be a sticky header
class Header extends Component{
  _handleLogout(){
    AsyncStorage.setItem('walletAddress', '');
    this.props.navigate('App');
    console.log("should logout.");
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => 
          // TODO: add prop types validation
          this.props.navigate('DrawerToggle')
        }>
          Menu
        </Button>

        // TODO: add logo
        <Text style={styles.welcome}>
          Lisk
        </Text>

        <Button onPress={() => this._handleLogout() }>
          Logout
        </Button>
      </View>
    );
  }
}

const styles = {
  container: {
    marginTop: 20,
    height: 80,
    width: '100%',
    backgroundColor: '#eeeeee',
    flexDirection: 'row'
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

export default Header;
