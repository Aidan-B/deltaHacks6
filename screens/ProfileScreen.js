import React, {Component} from 'react';
import { ExpoConfigView } from '@expo/samples';

import styles from '../constants/styles.js'
import { View, CheckBox, Text, Image, StyleSheet } from 'react-native';

const Checkbox = props => (<input type="checkbox" {...props}/>)


class CardHead extends Component {
  render() {
    return(
      <View style={{margin: 20, marginBottom: 0, alignSelf: 'stretch', flexDirection: 'row', borderBottomColor: 'lightgrey', borderBottomWidth: 2}}>
        <Text style={{fontSize: 24, alignSelf:"flex-end", flex: 1, textAlign:"right", textAlignVertical:"bottom", margin:5, marginBottom:0}}>{this.props.name}</Text>
      </View>
    )
  }
}

class OptionCard extends Component {
  render() {
    return(
      <View style={{marginRight:10, alignSelf: 'flex-end', flexDirection: 'row', alignItems:"center"}}>
        <Text style={{fontSize: 16, textAlign:"right", margin: 10}}>{this.props.name}</Text>
        <CheckBox style={{margin:10}}></CheckBox>
      </View>
    )
  }
}

export default class ProfileScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={{alignItems: "center"}}>
            <CardHead name="Diets"></CardHead>
            <OptionCard name='Vegan' style={{backgroundColor: 'powderblue'}}></OptionCard>
            <OptionCard name='Vegetarian' style={{backgroundColor: 'skyblue'}}></OptionCard>
            <OptionCard name='Gluten Free' style={{backgroundColor: 'steelblue'}}></OptionCard>
          </View>
        </View>
      );
    }
}

ProfileScreen.navigationOptions = {
  title: 'Your Profile',
};
