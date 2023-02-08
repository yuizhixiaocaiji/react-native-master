import * as React from 'react';
import {Text, View} from 'react-native';
import {Button} from '@rneui/themed';
import {customStyleSheet} from '../Config';
import CustonIcon from '../Assets/icon-font/index';
import {userMessage} from '../Json/users';
import {RootStackScreenProps} from '../Interface';
import {global} from '../theme';
import {InputLogin} from '../Component';
import {LoginParams} from '../Interface';
import {useAppSelector} from '../Hooks/redux.hooks';
import {selectParams} from '../Slice/login.slice';

/**
 *
 * @returns 登录页
 */

const LoginScreen: React.FC<RootStackScreenProps<'Login'>> = ({
  navigation,
}: RootStackScreenProps<'Login'>) => {
  const [isDisplay, setIsDisplay] = React.useState(true),
    [userErrorMessage, setUserErrorMessage] = React.useState(''),
    [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

  const submitData: LoginParams = useAppSelector(selectParams);

  const changeButtonStatus = React.useCallback((status: boolean) => {
    setIsDisplay(status);
  }, []);

  const submitLogin = () => {
    if (
      !!userMessage.find(
        item =>
          item.userId === submitData.userId &&
          item.password === submitData.password,
      )
    ) {
      setUserErrorMessage('');
      setPasswordErrorMessage('');
      navigation.navigate('Home', {userId: '1000'});
    } else if (!!!userMessage.find(item => item.userId === submitData.userId)) {
      setUserErrorMessage('用户名不存在，请检查后重试');
    } else if (!!userMessage.find(item => item.userId === submitData.userId)) {
      setUserErrorMessage('');
      userMessage.find(item => item.userId === submitData.userId)?.password ===
      submitData.password
        ? setPasswordErrorMessage('')
        : setPasswordErrorMessage('密码错误，请检查后重新输入');
    }
  };

  return (
    <View style={[global.main, {backgroundColor: '#ffffff'}]}>
      <View style={styles.settingHolder}>
        <Button
          icon={<CustonIcon name="shezhiicon" color="#666666" size={25} />}
          type="clear"></Button>
      </View>
      <View style={styles.logoHolder}>
        <CustonIcon name="xinlogo" color="#2A6CE8" size={160} />
      </View>
      <View style={styles.titleHolder}>
        <Text style={styles.appTitle}>有好管家</Text>
      </View>
      <InputLogin
        changeButtonStatus={changeButtonStatus}
        userErrorMessage={userErrorMessage}
        passwordErrorMessage={passwordErrorMessage}
      />
      <View>
        <Button
          title="登录"
          buttonStyle={styles.buttonStyles}
          containerStyle={styles.buttonStyles}
          titleStyle={styles.buttonTextStyles}
          disabled={isDisplay}
          onPress={submitLogin}></Button>
      </View>
      <View style={{marginTop: 100}}>
        <Text style={styles.tagText}>有好软件版权所有</Text>
      </View>
    </View>
  );
};

let styles = customStyleSheet.create({
  settingHolder: {
    width: '100%',
    alignItems: 'flex-end',
    paddingTop: 40,
    paddingRight: 40,
  },
  logoHolder: {
    paddingTop: 100,
  },
  titleHolder: {
    paddingTop: 30,
    marginBottom: 300,
  },
  appTitle: {
    fontSize: 36,
    color: '#2A6CE8',
  },
  buttonStyles: {
    width: 500,
    borderRadius: 12,
  },
  buttonTextStyles: {
    fontSize: 36,
  },
  tagText: {
    fontSize: 20,
    color: '#999999',
  },
});

export default LoginScreen;
