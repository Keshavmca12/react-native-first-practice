import axios from 'axios';
import * as Actions from './../actionType';
import { NavigationActions } from 'react-navigation';

export function handleEmail(text) {
    alert("heloo" + text);
}



export function userLogin(contactNumber, navigation) {
    return dispatch => {
    // alert("heloo"+contactNumber);
    var user = {
        contactNumber: contactNumber,
        unit: 10000,
        terminalId: 1
    };
    var temp = {
        application : "KETTLE_CRM",
        password : "321321",
        screenType : "CUSTOMER",
        terminalId : 1,
        unitId : 10003,
        userId  : 120057
    };
    var auth = "eyJhbGciOiJIUzI1NiJ9.eyJzZXNzaW9uS2V5IjoibGkwN2luREtUdlRPOXJRUW5oRHN3VUFKMkdmakdVZWJiK3JjMTlid0FHeDZuTWV0SXJZNmh4WXdVZ3c0SGtBWk5MaHgzc2d5MUxFWlxuUkhUYXY3RkcxZkRWaHZ1bVVCMy91VXM5TUI3VDVpaz0iLCJ1bml0SWQiOjEwMDAwLCJ0ZXJtaW5hbElkIjoxLCJ1c2VySWQiOjEyMDA1NywiaWF0IjoxNTM0NzUxNjUzLCJpc3N1ZXIiOiJLRVRUTEVfQ1JNIn0.3s7IeSX4ZcaV5vc48XNFkZlMNsbGmscT9QRS_2n9YhU";
    console.log("user : ", user);
   // navigation.navigate( 'Home' );
    axios({
        method: "POST",
        url: "http://dev.kettle.chaayos.com:9595/master-service/rest/v1/users/login",
        data: JSON.stringify(temp),
        headers: {
            'Content-Type': 'application/json'
            , 'auth': auth
        }
    }).then(function (response) {
        console.log("lookup response ", response.data);
        dispatch({type: Actions.SUCCESSFUL_LOGIN, payload: response.data});
        console.log("NavigationActions",NavigationActions);
        navigation.navigate( 'Home' );
        
    }).catch(function (error) {
        navigation.navigate( 'Error' );
        console.log("lookup eror ", error);
    });
}
}

