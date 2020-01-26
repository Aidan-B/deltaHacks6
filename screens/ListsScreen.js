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
import { ListTemplate } from './ListTemplate'


export default function ListsScreen() {
    var modalVisible = false;
    var num_list = 4
    var editing = false;

    if (!editing)
        return (
            <View style={{ alignItems: 'center' }}>
                {createButtons(num_list)}

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
    else
        return <ListTemplate />;
}

function createButtons(num_list) {
    let Barray = []

    for (let i = 0; i < num_list; i++) {
        Barray.push(
            <TouchableOpacity
                onPress={() => _retrieveData("TASKS")}
                style={styles.listButton}
                key={i}
            >
                <Text
                    style={{
                        fontSize: 40,
                        color: '#eee',
                    }}
                >List {i + 1}</Text>
            </TouchableOpacity>
        )
    }
    return Barray
}

// Button incrementing
function add(num_list) {
    var num_lists = _retrieveData("num");
    _storeData("num", num_lists + 1)
    Alert.alert("Buttons: " + num_list)
}

async function _storeData(key, data) {
    try {
        await AsyncStorage.setItem("@App:" + key, toString(data));
    } catch (error) {
        Alert.alert(error)
    }
};

_retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem("@App:" + key);
        if (value !== null) {
            return parseInt(value)
        }
    } catch (error) {
        Alert.alert(error)
    }
};

ListsScreen.navigationOptions = {
  title: 'Your Lists',
};

/*<Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{ marginTop: 22 }}>
                    <View>
                        <Text>Hello World!</Text>

                        <TouchableOpacity
                            onPress={() => {
                                modalVisible = false;
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>*/