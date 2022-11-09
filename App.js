import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './components/navigation/index';
//import auth from '@react-native-firebase/auth';

export default function App() {
  return (
      <NavigationContainer>
        <Tabs/>
      </NavigationContainer>
  );
}