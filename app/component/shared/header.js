import React, { Component } from 'react';
import {
  Text,
  AsyncStorage,
  View,
  Button 
} from 'react-native';

// TODO: this should be a sticky header
class Header extends Component{
  _handleLogout = async () => {
    await AsyncStorage.setItem('walletAddress', '');
    this.props.navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button 
          title="Menu"
          onPress={() => 
            // TODO: add prop types validation
            this.props.navigate('DrawerToggle')
          }
        />

        // TODO: add logo
        <Text style={styles.welcome}>
          Lisk
        </Text>

        <Button 
          title="logout" 
          onPress={() => this._handleLogout()}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    paddingTop: 20,
    paddingBottom: 0,
    paddingLeft: 16,
    paddingRight: 16,
    height: 60,
    width: '100%',
    backgroundColor: '#ffffff',
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
