import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

const HomeScreen = ({navigation}) => (
  <SafeAreaView>
    <Text>Screen: Home</Text>

    {/* <TouchableHighlight onPress={() => navigation.navigate('Home')}> */}
    {/*   <Text>Go to home</Text> */}
    {/* </TouchableHighlight> */}
  </SafeAreaView>
);

export default HomeScreen;