import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

class AccountList extends Component {
  _handleAdd() {
    this.props.navigation.navigate('Login');
  }

  _handleViewAccount() {
    console.log("should show account");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>
          Your Lisk IDs
        </Text>
    
        <ScrollView 
          style={{width: '100%'}} 
          contentContainerStyle={styles.scrollContainer}
        >
          <TouchableOpacity  
            style={styles.addbox} 
            onPress={()=> this._handleAdd()}
          >
            <View style={styles.center}>
              <Text style={{fontSize: 120, color: 'white'}}>+</Text>
              <Text style={styles.addh2}>
                Add a Lisk ID
              </Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity  style={styles.accountbox} onPress={()=> this._handleViewAccount()}>
            <View style={styles.center}>
              <Text style={styles.h2}>
                260.2312 LSK
              </Text>
              <Text>123123123231L</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.accountbox} onPress={()=> this._handleViewAccount()}>
            <View style={styles.center}>
              <Text style={styles.h2}>
                1320.87123 LSK
              </Text>
              <Text>234234234242L</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

// TODO: change flexDirection if landscape
const styles = {
  container: {
    paddingTop: 40,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#032660'
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center'
  },
  h1: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8
  },
  h2: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addh2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8
  },
  addbox: {
    width: '90%',
    maxWidth: 270,
    height: 300,
    backgroundColor: '#1F73FF',
    borderRadius: 5,
    marginTop: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 8, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20
  },
  accountbox: {
    width: '90%',
    maxWidth: 270,
    height: 300,
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 8, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20
  }
}

export default AccountList;
