import React from 'react';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    Ionicons,
    View,
    TextInput,
    Image,
    Alert,
    AsyncStorage,
    Modal,
    TouchableHighlight,
    JSON
} from 'react-native';
import styles from '../constants/styles.js'


export default function ListTemplate() {
    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
                onPress={() => { modalVisible = true; num_list += 1; add(num_list) }}
                style={styles.addButton}
            >
                <Text
                    style={{
                        fontSize: 80,
                        color: '#eef',
                    }}
                >+</Text>
            </TouchableOpacity>
        </View>    
    );
}