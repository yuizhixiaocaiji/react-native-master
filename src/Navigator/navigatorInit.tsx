import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, LoginScreen} from '../Screen';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './utils';
import {RootStackParamList} from '../Interface';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const options: NativeStackNavigationOptions = {
  headerShown: false,
};

export default function NavigatorInit() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator initialRouteName="Login">
        <RootStack.Screen
          name="Login"
          component={LoginScreen}
          options={options}
        />
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{userId: ''}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
