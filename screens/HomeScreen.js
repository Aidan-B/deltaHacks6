import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from '../constants/styles.js'
import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
                require('../assets/images/Plum1.jpeg')
            }
            style={styles.welcomeImage}
          />
        </View>


        <View style={styles.getStartedContainer}>
                  <Text style={styles.getStartedText}>Welcome!
                      </Text>

          <Text style={styles.getStartedText}>
            Seems like you would like to eat cheaper, healthier, 
            and more environmentally sustainably. Great! {"\n"}Here's 
            can how we can help:{"\n"}{"\n"}{"\n"}
            1. Edit your profile to tell us how you would like to eat differently.{"\n"}{"\n"}
            2. Create a grocery list as if you were not planning to change your diet.{"\n"}{"\n"}
            3. See the changes we suggest and choose if you'd like to keep them!{"\n"}{"\n"}{"\n"}
            Have fun!
                    
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}