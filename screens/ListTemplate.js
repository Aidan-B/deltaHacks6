import React from 'react';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Alert,
} from 'react-native';
import styles from '../constants/styles.js'
import { requestFood, checkItem } from '../api/foodrequest.js'
import ProfileScreen from '../screens/ProfileScreen.js'
import { Ionicons } from '@expo/vector-icons';

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
                        onPress={() => { this.props.back() }}
                    >
                        <Ionicons
                            name={Platform.OS === 'ios' ? 'ios-arrow-round-back' : 'md-arrow-round-back'}
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
                    kID={i}>
                    {this.state.food[i]}
                </ListItem>
            )
        }
        return ItemArray
    }

    checkItems() {
        Alert.alert(ProfileScreen.state.user_settings)
        for (let i = 0; i < this.state.food.length; i++) {
           checkItem(this.state.food[i], "VEGAN")
        }
    }

    // UPDATE WHEN MESSAGE IS ENTERED
    update() {
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