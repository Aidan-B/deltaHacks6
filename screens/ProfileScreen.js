import React, {Component} from 'react';

import styles from '../constants/styles.js'
import { View, Text, ScrollView, Alert, Switch } from 'react-native';

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
    state = {
        val: 0,
    }

  pressBox() {
    this.props.update(this.props.kID)
    this.setState((prevState) => ({ val: !prevState.val }));
  }
    
  render() {
    return(
      <View 
        style={{
          marginRight:10,
          alignSelf: 'flex-end',
          flexDirection: 'row',
          alignItems:"center"
        }}
      >
        <Text style={{
          fontSize: 16,
          textAlign:"right",
          margin: 10}}>{this.props.name}</Text>
            <Switch
                style={{ margin: 10 }}
                value={this.state.val}
                onValueChange={(value) => { this.pressBox() }}
                
        />
      </View>
    )
  }
}

const DIET = 0
const ALER = 1
const RELI = 2

export default class ProfileScreen extends Component {
    constructor() {
        super();
        //Setting up global variable
        global.settings = [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0
        ]

        global.R_terms = [
            "alcohol - free",
            "celery - free",
            "crustacean - free",
            "dairy - free",
            "egg - free",
            "fish - free",
            "fodmap - free",
            "gluten - free",
            "keto - friendly",
            "kidney - friendly",
            "kosher",
            "lupine - free",
            "mustard - free",
            "low - fat - abs",
            "No - oil - added",
            "low - sugar",
            "paleo",
            "peanut - free",
            "pecatarian",
            "pork - free",
            "red - meat - free",
            "sesame - free",
            "shellfish - free",
            "soy - free",
            "sugar - conscious",
            "tree - nut - free",
            "vegan",
            "vegetarian",
            "wheat - free",
        ]
    }

    state = {
        user_settings: [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 
            0, 0, 0, 0
        ]
    }

    update(kID) {
        this.state.user_settings[kID] = !this.state.user_settings[kID]
        this.forceUpdate()
        global.settings[kID] = this.state.user_settings[kID]
    }

    R_type = [DIET, ALER, ALER, ALER, ALER,
        ALER, DIET, DIET, DIET, DIET,
        RELI, ALER, ALER, DIET, DIET,
        DIET, DIET, ALER, DIET, ALER,
        DIET, ALER, ALER, ALER, DIET,
        ALER, DIET, DIET, ALER]

    R_names = [
        "Alcohol Free",
        "Celery",
        "Crustacean",
        "Dairy",
        "Egg",
        
        "Fish",
        "Fodmap (Low Carb)",
        "Gluten",
        "Keto",
        "Kidney Friendly",

        "Kosher",
        "Lupine",
        "Mustard",
        "Low Fat",
        "No Oil Added",

        "Low Sugar",
        "Paleo",
        "Peanut",
        "Pecatarian",
        "Pork",

        "No Red Meat",
        "Sesame",
        "Shellfish",
        "Soy",
        "Sugar Conscious",

        "Tree Nut",
        "Vegan",
        "Vegetarian",
        "Wheat"
    ]

    render() {
      return (
        <View style={styles.container}>
          <ScrollView style={styles.ScrollView}>
            <View style={{alignItems: "center"}}>
              <CardHead name="Diets"></CardHead>
                {this.Diets()}
            </View>
            <View style={{alignItems: "center"}}>
              <CardHead name="Allergies"></CardHead>
                {this.Allergies()}
            </View>
            <View style={{alignItems: "center"}}>
              <CardHead name="Religious"></CardHead>
                 <OptionCard 
                        name='Kosher' 
                        kID={10}
                        update={this.update.bind(this)}>
                 </OptionCard>
            </View>
            <View style={{height: 100}}/>
          </ScrollView>
        </View>
      );
    }

    Diets() {
        let tagsArray = []

        for (let i = 0; i < this.R_names.length; i++) {
            if (this.R_type[i] == DIET) {
                tagsArray.push(
                    <OptionCard
                        name={this.R_names[i]}
                        kID={i}
                        update={this.update.bind(this)}
                    />
                )
            }
        }
        return tagsArray
    }

    Allergies() {
        let tagsArray = []

        for (let i = 0; i < this.R_names.length; i++) {
            if (this.R_type[i] == ALER) {
                tagsArray.push(
                    <OptionCard
                        name={this.R_names[i]}
                        kID={i}
                        update={this.update.bind(this)}
                    />
                )
            }
        }
        return tagsArray
    }
}

ProfileScreen.navigationOptions = {
  title: 'Your Profile',
};
