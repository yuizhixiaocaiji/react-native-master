import * as React from 'react';
import {Text, View} from 'react-native';
import {Button} from '@rneui/themed';
import {customStyleSheet} from '../Config';
import CustonIcon from '../Assets/icon-font/index';
import {userMessage} from '../Json/users';
import {RootStackScreenProps} from '../Interface';
import {global} from '../theme';
import {InputLogin} from '../Component';
/**
 *
 * @returns 登录页
 */

const LoginScreen: React.FC<RootStackScreenProps<'Login'>> = ({
  navigation,
}: RootStackScreenProps<'Login'>) => {
  const [isDisplay, setIsDisplay] = React.useState(true);

  const goHome = () => {
    navigation.navigate('Home', {userId: '1000'});
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
      <InputLogin />
      <View>
        <Button
          title="登录"
          buttonStyle={styles.buttonStyles}
          containerStyle={styles.buttonStyles}
          titleStyle={styles.buttonTextStyles}
          disabled={isDisplay}></Button>
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
