import React from 'react';
import * as StyleSheet from './src/app/style';
import { View } from 'react-native';
import {RootStackNavigator} from './src/app/rootStackNavigator';
import { Provider } from 'react-redux';
import store from './src/app/store'



export default class App extends React.Component {
  render() {
    return (
      
      <Provider store={store}>
        <View style={StyleSheet.styles.container}>
          <RootStackNavigator />;
          </View>
      </Provider>
    );
  }
}


