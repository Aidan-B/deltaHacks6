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
import ListTemplate from './ListTemplate.js'


export default class ListsScreen extends React.Component {
    state = {
        modalVisible: false,
        num_list: 0,
        editing: false,
        current: 0,
    };

    render() {
        if (this.state.editing)
            return <ListTemplate />
        else
            return (
                <View style={styles.container}>
                    <ScrollView
                        style={styles.container}
                        contentContainerStyle={styles.contentContainer}
                    >
                        {this.createButtons(this.state.num_list, this.state.current)}

                        <TouchableOpacity
                            onPress={() => { this.add() }}
                            style={styles.addButton}
                        >
                            <Text
                                style={{
                                    fontSize: 80,
                                    color: '#eef',
                                }}
                            >+</Text>
                        </TouchableOpacity>
                        <View style={{height: 100}}/>
                    </ScrollView>
                </View>
            );
    }

    createButtons(num_list) {
        let Barray = []

        for (let i = 0; i < num_list; i++) {
            Barray.push(
                <TouchableOpacity
                    onPress={() => { this.state.current = i; this.state.editing = true; this.forceUpdate() }}
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
    add() {
        this.setState(() => { this.state.num_list++ })
        this.forceUpdate();
    }
} // END CLASS

ListsScreen.navigationOptions = {
  title: 'Your List',
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