import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Text>Hello world!</Text>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
        />
      </View>
    );
  }
}