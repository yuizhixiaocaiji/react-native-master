import {Input} from '@rneui/themed';
import * as React from 'react';
import {customStyleSheet} from '../Config';
import CustonIcon from '../Assets/icon-font/index';
import {LoginParams} from '../Interface';
import {useAppSelector, useAppDispatch} from '../Hooks/redux.hooks';
import {
  selectParams,
  saveLoginUserId,
  saveLoginPassword,
} from '../Slice/login.slice';

interface inputLoginParams {
  changeButtonStatus: (status: boolean) => void;
  userErrorMessage: string;
  passwordErrorMessage: string;
}

function inputLogin(props: inputLoginParams) {
  const {changeButtonStatus, userErrorMessage, passwordErrorMessage} = props;

  const submitData: LoginParams = useAppSelector(selectParams);
  const dispatch = useAppDispatch();

  const userInput: any = React.createRef(),
    passwordInput: any = React.createRef();

  React.useEffect(() => {
    if (submitData.userId !== '' && submitData.password.length > 3) {
      changeButtonStatus(false);
    } else {
      changeButtonStatus(true);
    }
  }, [submitData.userId, submitData.password]);

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
        onChangeText={value => dispatch(saveLoginUserId(value))}
        errorStyle={{color: 'red'}}
        errorMessage={userErrorMessage}
        value={submitData.userId}></Input>
      <Input
        ref={passwordInput}
        secureTextEntry={true}
        containerStyle={[styles.inputHolders, {marginBottom: 30}]}
        inputContainerStyle={styles.inputStyle}
        leftIcon={<CustonIcon name="mimaicon" color="#2A6CE8" size={20} />}
        placeholder="请输入4～8位密码"
        onChangeText={value => dispatch(saveLoginPassword(value))}
        errorStyle={{color: 'red'}}
        errorMessage={passwordErrorMessage}
        value={submitData.password}></Input>
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
