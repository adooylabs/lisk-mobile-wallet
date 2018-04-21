import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
  StyleSheet
} from 'react-native';

class AuthLoading extends Component{
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const walletAddress = await AsyncStorage.getItem('walletAddress');

    // TODO: look up list address
    // and display in dashboard.
    
    // TODO: pass address to dashboard
    this.props.navigation.navigate(
      walletAddress && walletAddress != '' ? 'App' : 'Auth', 
      { walletAddress }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default AuthLoading;
