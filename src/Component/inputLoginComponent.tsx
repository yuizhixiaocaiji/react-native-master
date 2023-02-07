import {Input} from '@rneui/themed';
import * as React from 'react';
import {customStyleSheet} from '../Config';
import CustonIcon from '../Assets/icon-font/index';
import {LoginParams} from '../Interface';

interface inputLoginParams {
  changeButtonStatus: (status: boolean) => void;
  setSubmitData: (params: LoginParams) => void;
  userErrorMessage: string;
  passwordErrorMessage: string;
}

function inputLogin(props: inputLoginParams) {
  const {
    changeButtonStatus,
    setSubmitData,
    userErrorMessage,
    passwordErrorMessage,
  } = props;

  const userInput: any = React.createRef(),
    passwordInput: any = React.createRef();

  const [userId, setUserId] = React.useState(''),
    [password, setPassword] = React.useState('');

  React.useEffect(() => {
    if (userId !== '' && password.length > 3) {
      const params: LoginParams = {userId: '', password: ''};
      params.userId = userId;
      params.password = password;
      setSubmitData(params);
      changeButtonStatus(false);
    } else {
      changeButtonStatus(true);
    }
  }, [userId, password]);

  React.useEffect(() => {
    if (userErrorMessage !== '') {
      userInput.current.shake();
    }
    if (passwordErrorMessage !== '') {
      passwordInput.current.shake();
    }
  }, [userErrorMessage, passwordErrorMessage]);

  return (
    <>
      <Input
        ref={userInput}
        containerStyle={styles.inputHolders}
        inputContainerStyle={styles.inputStyle}
        leftIcon={<CustonIcon name="zhanghaoicon" color="#2A6CE8" size={20} />}
        placeholder="请输入账号"
        onChangeText={value => setUserId(value)}
        errorStyle={{color: 'red'}}
        errorMessage={userErrorMessage}></Input>
      <Input
        ref={passwordInput}
        secureTextEntry={true}
        containerStyle={[styles.inputHolders, {marginBottom: 30}]}
        inputContainerStyle={styles.inputStyle}
        leftIcon={<CustonIcon name="mimaicon" color="#2A6CE8" size={20} />}
        placeholder="请输入4～8位密码"
        onChangeText={value => setPassword(value)}
        errorStyle={{color: 'red'}}
        errorMessage={passwordErrorMessage}></Input>
    </>
  );
}

let styles = customStyleSheet.create({
  inputHolders: {
    width: '80%',
  },
  inputStyle: {
    borderBottomColor: '#DDDDDD',
  },
});

export default inputLogin;
