import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import MainStackNavigator from './navigation/StackNavigator';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AuthScreen from './screens/AuthScreen';

export default function Index() {
  const authenticated = useSelector(state => state.auth.authenticated);
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor="#000" translucent />
      {authenticated ? <MainStackNavigator /> : <AuthScreen />}
    </NavigationContainer>
  );
}
