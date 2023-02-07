import type {NativeStackScreenProps} from '@react-navigation/native-stack';
/**
 * 路由专用类型文件
 *
 * @注意  路由名称类型指定undefined意味着路由没有参数
 *        而带有undefined的联合类型则意味着存在参数
 */

//Navigator For Root
export type RootStackParamList = {
  Login: undefined;
  Home: {userId: string};
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
