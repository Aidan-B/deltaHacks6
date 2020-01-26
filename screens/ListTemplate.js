import React from 'react';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Image,
    Alert,
    JSON,
} from 'react-native';
import styles from '../constants/styles.js'
import { Ionicons } from '@expo/vector-icons';

export default class ListTemplate extends React.Component {
    state = {
        food: [],
    }

    render() {
        return (
            <View style={{ alignItems: 'center' }}>

                
                

                <ListItem>
                    Bread
                </ListItem>

                <ListItem>
                    Ham
                </ListItem>

            </View>
        );
    }

    TextField() {
        const [value, onChangeText] = React.useState('Useless Placeholder');
        return (
            <TextInput
                style={styles.searchBox}
                onChangeText={text => onChangeText(text)}
                value={value}
                onEndEditing={value => { food[index] = value; index++; this.forceUpdate()}}

            />
        );
    }


    a_to_s() {
        return null;
    }
}

class ListItem extends React.Component {
    render() {
        return (
            <View style={styles.listContainer}>
                <Text style={{ width: '50%' }}>
                    {this.props.children}
                </Text>
                <Ionicons
                    name={Platform.OS === 'ios' ? 'ios-notifications-outline' : 'md-notifications-outline'}
                    size={30}
                    style={{ marginBottom: -3 }}
                    color={'0xf0f'}
                />
            </View>
        )
    }
}