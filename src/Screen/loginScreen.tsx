import * as React from 'react';
import {Text, View} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {customStyleSheet} from '../Config';
import CustonIcon from '../Assets/icon-font/index';
import {userMessage} from '../Json/users';
import {navigate} from '../Navigator/utils';
import {global} from '../theme';
/**
 *
 * @returns 登录页
 */

const LoginScreen: React.FC<{}> = () => {
  return (
    <View style={[global.main, {backgroundColor: '#ffffff'}]}>
      <Text>Login page</Text>
    </View>
  );
};

let styles = customStyleSheet.create({});

export default LoginScreen;
