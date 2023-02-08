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

export const {saveLoginUserId, saveLoginPassword, removeLoginParams} =
  paramsSlice.actions;

export const selectParams = (state: RootState) => state.loginParams;

export default paramsSlice.reducer;
