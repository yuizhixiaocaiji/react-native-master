import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, LoginScreen} from '../Screen';
import {navigationRef} from './utils';
import {RootStackParamList} from '../Interface';

const RootStack = createStackNavigator<RootStackParamList>();

export default function NavigatorInit() {
  return (
    <RootStack.Navigator initialRouteName="Login">
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{userId: ''}}
      />
    </RootStack.Navigator>
  );
}
