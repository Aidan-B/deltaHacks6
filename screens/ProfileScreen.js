import React, {Component} from 'react';
import { ExpoConfigView } from '@expo/samples';

import styles from '../constants/styles.js'
import { View, CheckBox, Text, Image, StyleSheet } from 'react-native';

class OptionCard extends Component {
  render() {
    return(
      <View style={{height: 80}}>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

export default class ProfileScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={{alignItems: "center"}}>
            <OptionCard name='Working is hard' style={{backgroundColor: 'powderblue'}}></OptionCard>
            <OptionCard name='Working is hard' style={{backgroundColor: 'skyblue'}}></OptionCard>
            <OptionCard name='Working is hard' style={{backgroundColor: 'steelblue'}}></OptionCard>
          </View>
        </View>
      );
    }
}

ProfileScreen.navigationOptions = {
  title: 'Your Profile',
};
