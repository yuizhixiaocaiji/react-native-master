import * as React from 'react';
import NavigatorInit from '../src/Navigator/navigatorInit';
import {ThemeProvider} from '@rneui/themed';
import {myTheme} from './Config';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={myTheme}>
        <NavigatorInit />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
