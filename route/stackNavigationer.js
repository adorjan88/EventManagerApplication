import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import App from '../App';
import HomeComponent from '../App';

const screens={
    Home: {
        screen: App
    },
    
    Main:{
        screen: HomeComponent.js
    }
}

const mainStack = createStackNavigator(screens)

export default createAppContainer(mainStack)