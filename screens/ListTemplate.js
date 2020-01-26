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

export default class ListTemplate extends React.Component {
    state = {
        food: [],
    }

    render() {
        return (
            <View style={{ alignItems: 'center' }}>

                
                {this.TextField}

                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.listItem}
                >
                    <Text
                        style={{
                            fontSize: 40,
                            color: '#eef',
                        }}
                    >Bread</Text>
                </TouchableOpacity>
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
            <View style={listContainer}>
                <Text style={{ width: '50%' }}>
                    {...this.props.children}
                </Text>
            </View>
        )
    }
}