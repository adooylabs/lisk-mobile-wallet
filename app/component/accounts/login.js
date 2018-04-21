import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import { 
  Input,
  Button
} from 'nachos-ui'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
    };
  }

  _handleLogin = async () => {
    await AsyncStorage.setItem('walletAddress',  this.state.address);

    if(this.state.address) {
      this.props.navigation.navigate('App');
    } else {
      if(this.state.address == ''){
        // TODO: tell user input is empty
      } else {
        // TODO: tell user not a valid address
      }
    }
  };

  _handleRegister = () => {
    this.props.navigation.navigate('Generate');
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          style={styles.input}
          placeholder='Enter Your Wallet Address'
          onChangeText={(text) => { 
            this.setState({ address: text }); 
          }}
        />

        <Button onPress={() => this._handleLogin()}>
          Login
        </Button>

        <Button onPress={() => this._handleRegister()}>
          + Add Lisk ID
        </Button>
      </View>
    );
  }
}

const styles = {
  container: {
    padding: 32,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    marginTop: 15
  }
};

export default Login;
