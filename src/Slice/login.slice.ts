import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginParams} from '../Interface';
import {RootState} from '../Store/store';

/**
 * 记录登录信息的切片
 */

const initialState: LoginParams = {
  userId: '',
  password: '',
};

export const paramsSlice = createSlice({
  name: 'userParams',
  initialState,
  reducers: {
    saveLoginParams: (state, action: PayloadAction<LoginParams>) => {
      state.password = action.payload.password;
      state.userId = action.payload.userId;
    },
    removeLoginParams: state => {
      state.password = '';
      state.userId = '';
    },
  },
});

export const {saveLoginParams, removeLoginParams} = paramsSlice.actions;

export const selectParams = (state: RootState) => state.loginParams;

export default paramsSlice.reducer;
