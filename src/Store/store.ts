import {configureStore, combineReducers} from '@reduxjs/toolkit';
import paramsReducer from '../Slice/login.slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

//默认的持久化参数
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

//将全部的Reducer合并
let allReducers = combineReducers({
  loginParams: paramsReducer,
});

//将全部的Reducer进行持久化操作，生成新的Reducer
const persistedReducer = persistReducer(persistConfig, allReducers);

//创建全局状态管理中心store,并将参数序列化
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
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
