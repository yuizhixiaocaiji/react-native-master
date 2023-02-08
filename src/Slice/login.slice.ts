import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginParams} from '../Interface';
import {RootState} from '../Store/store';

/**
 * 记录登录信息的切片
 */

//初始化登录状态信息参数
const initialState: LoginParams = {
  userId: '',
  password: '',
};

//定义状态切片
export const paramsSlice = createSlice({
  name: 'userParams',
  initialState,
  reducers: {
    saveLoginUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },

    saveLoginPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },

    removeLoginParams: state => {
      state.password = '';
      state.userId = '';
    },
  },
});

//将切片所定义的Reducers从action中解构并导出
export const {saveLoginUserId, saveLoginPassword, removeLoginParams} =
  paramsSlice.actions;

//将本切片存储数据导出
export const selectParams = (state: RootState) => state.loginParams;

//将登录参数Reducer导出
export default paramsSlice.reducer;
