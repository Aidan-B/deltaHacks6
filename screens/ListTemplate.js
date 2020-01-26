import React from 'react';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Alert,
    Linking
} from 'react-native';
import styles from '../constants/styles.js'
import { requestFood, getFood } from '../api/foodrequest.js'
import { getRecipes } from '../api/suggest-recipes.js'
import { Ionicons } from '@expo/vector-icons';
//import { settings } from '../screens/ProfileScreen';

const R_terms = [
    "alcohol-free",
    "celery-free",
    "crustacean-free",
    "dairy-free",
    "egg-free",
    "fish-free",
    "fodmap-free",
    "gluten-free",
    "keto-friendly",
    "kidney-friendly",
    "kosher",
    "lupine-free",
    "mustard-free",
    "low-fat-abs",
    "No-oil-added",
    "low-sugar",
    "paleo",
    "peanut-free",
    "pecatarian",
    "pork-free",
    "red-meat-free",
    "sesame-free",
    "shellfish-free",
    "soy-free",
    "sugar-conscious",
    "tree-nut-free",
    "vegan",
    "vegetarian",
    "wheat-free",
]

let settings = [
    0, // Alcohol Free              ALLERGY
    0, // Celery Free               ALLERGY
    0, // Crustacean Free           ALLERGY
    0, // Dairy Free                ALLERGY
    0, // Egg Free                  ALLERGY
    0, // Fish Free                 ALLERGY
    0, // Fodmap (Low Carb)                     DIET
    0, // Gluten Free                           DIET
    0, // Keto                                  DIET
    0, // Kidney Friendly                       DIET
    0, // Kosher                                            RELIGION
    0, // Lupine                    ALLERGY
    0, // Mustard Free              ALLERGY
    0, // Low Fat                               DIET
    0, // No Oil Added                          DIET
    0, // Low Sugar                             DIET
    0, // Paleo                                 DIET
    0, // Peanut Free               ALLERGY
    0, // Pescatarian                           DIET
    0, // Pork Free                 ALLERGY
    0, // No Red Meat                           DIET
    0, // Sesame Free               ALLERGY
    0, // Shellfish Free            ALLERGY
    0, // Soy Free                  ALLERGY
    0, // Sugar Conscious                       DIET
    0, // Tree Nut Free             ALLERGY
    0, // Vegan                                 DIET
    1, // Vegetarian                            DIET
    0, // Wheat free                ALLERGY
]

export default class ListTemplate extends React.Component {
    state = {
        food: [],
        text: "",
    }

    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <View style={styles.searchContainer}>
                    {this.TextField()}
                    <TouchableOpacity
                        style={styles.personalize}
                        onPress={() => { this.checkItems() }}
                    >
                        <Text style={styles.tabBarInfoText}>
                            Personalize!
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { this.yieldRecipe() }}
                    >
                        <Ionicons
                            name={Platform.OS === 'ios' ? 'ios-restaurant' : 'md-restaurant'}
                            size={40}
                            style={{ marginBottom: -3, paddingTop: 30 }}
                        />
                    </TouchableOpacity>
                </View>

                {this.ItemList()}
            </View>
        );
    }
    // TEXTFIELD
    TextField() {
        return (
            <TextInput
                style={styles.searchBox}
                placeholder="Type here add to your list!"
                onChangeText={text => this.setState({ text }) }
                value={this.state.text}
                onEndEditing={value => { this.update() }}
            />
        );
    }
    // LIST OF ITEMS
    ItemList() {
        let ItemArray = []

        for (let i = 0; i < this.state.food.length; i++) {
            ItemArray.push(
                <ListItem
                    editIndex={this.editIndex.bind(this)}
                    rmIndex={this.rmIndex.bind(this)}
                    key={i}
                    kID={i}>
                    {this.state.food[i]}
                </ListItem>
            )
        }
        return ItemArray
    }
    // API CALL TO REPLACE ITEMS
    async checkItems() {
        let restrictions = []
        for (let i = 0; i < settings.length; i++)
            if (settings[i])
                restrictions.push(R_terms[i])
        
        for (let i = 0; i < this.state.food.length; i++) {
            getFood(this.state.food[i], restrictions).then((response) => {
                this.state.food[i] = response[0]
                this.forceUpdate()
            }).catch((response) => { console.log(response.response.data); return false });
        }
        
    }
    // SHOW RECIPES
    yieldRecipe() {
        getRecipes(this.state.food).then((result) => {
            Linking.openURL(result['0'].recipe_links[0])
            //Alert.alert(result['0'].recipe_titles + " - " + result['0'].recipe_links[0])
        }).catch((result) => console.log(result.response.data));
        
    }

    // UPDATE WHEN MESSAGE IS ENTERED
    update() {
        if (this.state.text != "")
            this.state.food.push(this.state.text)
        this.state.text = ""
        this.forceUpdate()
    }
    // Passing state from child to parent
    editIndex(kID, value) {
        this.state.food[kID] = value
        this.forceUpdate()
    }
    rmIndex(kID) {
        this.state.food.splice(kID, 1)
        this.forceUpdate()
    }
}

class ListItem extends React.Component {
    render() {
        return (
            <View style={styles.listContainer}>
                <TextInput
                    style={styles.listItemText}
                    onSubmitEditing={value => this.props.editIndex(this.props.kID, value) }
                >
                    {this.props.children}  
                </TextInput>
                
                <TouchableOpacity
                    onPress={() => { this.props.rmIndex(this.props.kID) }}
                >
                     <Ionicons
                        name={Platform.OS === 'ios' ? 'ios-close-circle' : 'md-close-circle'}
                        size={40}
                        style={{ marginBottom: -3, paddingTop: 30 }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

/*              <Text>
                    {this.props.key}
                </Text>
                <Ionicons
                    name={Platform.OS === 'ios' ? 'ios-notifications-outline' : 'md-notifications-outline'}
                    size={65}
                    style={{ marginBottom: -3, paddingTop: 18, paddingRight: "10%" }}
                />
                <Ionicons
                    name={Platform.OS === 'ios' ? 'ios-restaurant' : 'md-restaurant'}
                    size={65}
                    style={{ marginBottom: -3, paddingLeft: 20, paddingTop: 20, width: "20%" }}
                />
*/