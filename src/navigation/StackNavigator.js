import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerNavigator} from './DrawerNavigator';
import HomeScreen from '../screens/HomeScreen';
import {IconButton, Title} from 'react-native-paper';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WorkerDetailScreen from '../screens/WorkerDetailScreen';
import LoginScreen from '../screens/LoginScreen';
// import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Workey"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <RightWrapper>
              <IconButton
                icon="magnify"
                color="#fff"
                size={22}
                onPress={() => console.log('Pressed')}
              />
              <Wrapper>
                <Icon name="account" size={22} color="#fff" />
                <Text style={{color: '#fff', fontSize: 18, letterSpacing: 2}}>
                  User
                </Text>
              </Wrapper>
            </RightWrapper>
          ),
        }}
      />
      <Stack.Screen
        name="login"
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <Stack.Screen name="worker-detail" component={WorkerDetailScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

const RightWrapper = styled.View`
  flex: 1;
  background-color: #181818;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-left: 5px;
  flex: 0.3;
`;
