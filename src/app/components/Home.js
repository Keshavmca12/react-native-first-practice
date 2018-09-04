import React, { Component } from 'react';
import HelloWorldApp from './HelloWorldApp';
import {  View,Text} from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View> 
                  <Text>Hello Welcome </Text>
                <HelloWorldApp></HelloWorldApp>
            </View>
        );
    };
}
    
