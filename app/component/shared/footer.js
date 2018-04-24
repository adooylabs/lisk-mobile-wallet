import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

class Footer extends Component {
  redner() {
    return (
      <View>
        <Text style={{ display: 'block', margin: 'auto' }}>
          created by: liskchef.com
        </Text>
      </View>
    );
  }
}
