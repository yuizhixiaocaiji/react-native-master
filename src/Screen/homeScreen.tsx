import * as React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {customStyleSheet} from '../Config';
import {global} from '../theme';
import {Props} from '../Interface';

const HomeScreen: React.FC<Props> = ({route, navigation}: Props) => {
  return (
    <View style={[global.main, {backgroundColor: '#ffffff'}]}>
      <Text>Home page</Text>
    </View>
  );
};

let styles = customStyleSheet.create({});

export default HomeScreen;
