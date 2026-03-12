import * as React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import AddContactScreen from './screens/AddContactScreen';


const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: MainScreen,
    Add: AddContactScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}