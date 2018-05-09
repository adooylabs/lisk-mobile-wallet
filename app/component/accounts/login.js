// TODO: detect if offline to disable form
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
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

  _handleRegister() {
    this.props.navigation.navigate('Generate');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginbox}>
          <Text style={styles.h1}>
            Sign In
          </Text>

          <Input
            style={styles.input}
            placeholder='Enter Your Address'
            onChangeText={(text) => { 
              this.setState({ address: text }); 
            }}
          />
        </View>

        <TouchableOpacity 
          style={styles.createbox}
          onPress={() => this._handleRegister()}
        >
          <View style={styles.justify}>
            <Text style={styles.whiteh1}>
              Create Lisk ID >
            </Text>
            <Text style={{color: '#ffffff'}}>
              Create a Lisk ID to gain access to all services.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    paddingTop: 35,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#032660'
  },
  loginbox: {
    flex: 1,
    width: '85%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 8, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    paddingTop: 24,
    paddingLeft: 32,
    paddingRight: 32,
    top: 20
  },
  createbox: {
    flex: 1,
    width: '100%',
    backgroundColor: '#1F73FF',
    zIndex: 999,
    padding: 32,
    opacity: .9
  },
  h1: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 8
  },
  whiteh1: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#ffffff'
  },
  justify: {
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    marginTop: 15
  }
};

export default Login;
