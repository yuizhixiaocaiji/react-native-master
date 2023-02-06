import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, LoginScreen} from '../Screen';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './utils';
import {RootStackParamList} from '../Interface';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function NavigatorInit() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator initialRouteName="Login">
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{userId: ''}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
