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
import { Ionicons } from '@expo/vector-icons';

export default class ListTemplate extends React.Component {
    state = {
        food: ["Pumpkin", "Chocolate"],
        alert: [0, 1],
        text: "",
    }

    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <View style={styles.searchContainer}>
                    {this.TextField()}
                    <Ionicons
                        name={Platform.OS === 'ios' ? 'ios-restaurant' : 'md-restaurant'}
                        size={65}
                        style={{ marginBottom: -3, paddingLeft: 20, paddingTop: 20, width: "20%" }}
                    />
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
                    key={i}>
                    {this.state.food[i]}
                </ListItem>
            )
        }
        return ItemArray
    }
    // UPDATE WHEN MESSAGE IS ENTERED
    update() {
        this.state.food.push(this.state.text)
        this.state.text = ""
        this.forceUpdate()
    }
    // Passing state from child to parent
    editIndex(key, value) {
        this.state.food[key] = value
        this.forceUpdate()
    }
    rmIndex(key) {
        this.state.food.splice(key, 1)
        this.forceUpdate()
    }
}

class ListItem extends React.Component {
    render() {
        return (
            <View style={styles.listContainer}>
                <TextInput
                    style={styles.listItemText}
                    onSubmitEditing={value => this.props.editIndex(this.props.key, value) }
                >
                    {this.props.children}
                    {""}
                </TextInput>
                
                <Ionicons
                    name={Platform.OS === 'ios' ? 'ios-notifications-outline' : 'md-notifications-outline'}
                    size={65}
                    style={{ marginBottom: -3, paddingTop: 18, paddingRight: "10%" }}
                />
                <TouchableOpacity
                    onPress={() => this.props.rmIndex(this.props.key)}
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