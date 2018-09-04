import React from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import * as StyleSheet from './../style';
import { connect } from "react-redux";
import * as CustomerAction from '../actions/CustomerAction';
import { NavigationActions } from 'react-navigation';


@connect((store) => {
  return {
    customer: null
  };
})


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.contactNumber = 8010012415;
    this.loginCustomer = this.loginCustomer.bind(this);
    
  }

  handleEmail() {
    NavigationActions.navigate( 'Home' );
    CustomerAction.handleEmail();
  }

  loginCustomer() {
    //  console.log(this.props);
    var contact = this.contactNumber;
    // alert("contact"+contact);
    this.props.dispatch(CustomerAction.userLogin(contact,  this.props.navigation));
  }
  goHome(){
    this.props.navigation.navigate('Home');
    
  }

  render() {
  
    
    return (
      
      <View style={StyleSheet.styles.container}>

        <Text style={{ height: 40, width: 100 }}>Hello</Text>

        <Text style={{ height: 60, width: 100 }}>Enter Your No.</Text>
        <TextInput id="loginCustomerContact" keyboardType='numeric'
          style={{ height: 50, borderColor: 'gray', borderWidth: 1 }}
          maxLength={10}
          onChangeText={(text) => this.contactNumber = text}
          value={this.state.text} placeholder="Enter mobile no"
        />

        <Button
          onPress={this.loginCustomer.bind(this)}
          title="Submit Here"
          color="#841584"
        />
        <Button
           onPress={this.goHome.bind(this)}
          title="Go home"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

         <Button
          title="Go to Error... again"
          onPress={() => this.props.navigation.navigate('Error')}
        />

      </View>

    );
  }
}


