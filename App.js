/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { SafeAreaView } from 'react-native';

import NavigatorApp from './src/NavigationApp/NavigationApp';
import { NavigationContainer } from '@react-navigation/native';








function App() {
  

  return (

    <NavigationContainer>
      <NavigatorApp />
    </NavigationContainer>
  );
}

export default App;
 