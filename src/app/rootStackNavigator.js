import {createStackNavigator} from 'react-navigation';
import  Login  from './components/Login';
import  Home  from './components/Home';
import  Error  from './components/Error';
import HelloWorldApp  from './components/HelloWorldApp'

 export const RootStackNavigator = createStackNavigator (
    {
        Login: Login,
        Home: Home,
        Error : Error,
        HelloWorld : HelloWorldApp
    },
    {
      initialRouteName: 'Login',
    }
  );