import {Input} from '@rneui/themed';
import * as React from 'react';
import {customStyleSheet} from '../Config';
import CustonIcon from '../Assets/icon-font/index';

function inputLogin() {
  const userInput: any = React.createRef(),
    passwordInput: any = React.createRef();

  return (
    <>
      <Input
        ref={userInput}
        containerStyle={styles.inputHolders}
        inputContainerStyle={styles.inputStyle}
        leftIcon={<CustonIcon name="zhanghaoicon" color="#2A6CE8" size={20} />}
        placeholder="请输入账号"></Input>
      <Input
        ref={passwordInput}
        secureTextEntry={true}
        containerStyle={[styles.inputHolders, {marginBottom: 30}]}
        inputContainerStyle={styles.inputStyle}
        leftIcon={<CustonIcon name="mimaicon" color="#2A6CE8" size={20} />}
        placeholder="请输入4～8位密码"></Input>
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
