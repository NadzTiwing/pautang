import 'react-native-gesture-handler';
import React from "react";

import { Provider } from 'react-redux';
import store from './redux/store';

import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from "./components/navigation/stackNavigator";

import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>
          <MainStackNavigator/>
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}