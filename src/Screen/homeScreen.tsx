import * as React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {customStyleSheet} from '../Config';
import {global} from '../theme';
import {RootStackScreenProps} from '../Interface';

const HomeScreen: React.FC<RootStackScreenProps<'Home'>> = ({
  route,
  navigation,
}: RootStackScreenProps<'Home'>) => {
  return (
    <View style={[global.main, {backgroundColor: '#ffffff'}]}>
      <Text>Home page</Text>
    </View>
  );
};

let styles = customStyleSheet.create({});

export default HomeScreen;
