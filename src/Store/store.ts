import {configureStore, combineReducers} from '@reduxjs/toolkit';
import paramsReducer from '../Slice/login.slice';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

let allReducers = combineReducers({
  loginParams: paramsReducer,
});

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = configureStore({
  reducer: persistedReducer,
});

let persistore = persistStore(store);

AsyncStorage.getItem('persist:root').then((data: any) => {
  console.log('获取持久化存储信息=', data);
});

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>;
// 推断类型
export type AppDispatch = typeof store.dispatch;

export {persistore};
export default store;
