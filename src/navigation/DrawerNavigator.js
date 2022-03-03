import React from 'react';

import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
// import {Colors, IconButton} from 'react-native-paper';
import styled from 'styled-components/native';

// import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
// import {useSelector} from 'react-redux';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      drawerContent={({navigation}) => (
        <DrawerContent navigation={navigation} />
      )}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export {DrawerNavigator};
