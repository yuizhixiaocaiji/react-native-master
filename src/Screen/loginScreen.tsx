import * as React from 'react';
import {Text, View} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {customStyleSheet} from '../Config';
import CustonIcon from '../Assets/icon-font/index';
import {userMessage} from '../Json/users';
import {RootStackScreenProps} from '../Interface';
import {global} from '../theme';
/**
 *
 * @returns 登录页
 */

const LoginScreen: React.FC<RootStackScreenProps<'Login'>> = ({
  navigation,
}: RootStackScreenProps<'Login'>) => {
  const goHome = () => {
    navigation.navigate('Home', {userId: '1000'});
  };

  return (
    <View style={[global.main, {backgroundColor: '#ffffff'}]}>
      <Text>Login page</Text>
      <Button title="点我点我" onPress={goHome}></Button>
    </View>
  );
};

let styles = customStyleSheet.create({});

export default LoginScreen;
