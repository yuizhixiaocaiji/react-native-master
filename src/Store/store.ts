import {configureStore} from '@reduxjs/toolkit';
import paramsReducer from '../Slice/login.slice';

const store = configureStore({
  reducer: {
    loginParams: paramsReducer,
  },
});

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>;
// 推断类型
export type AppDispatch = typeof store.dispatch;
