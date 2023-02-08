import * as React from 'react';
import NavigatorInit from '../src/Navigator/navigatorInit';
import {ThemeProvider} from '@rneui/themed';
import {myTheme} from './Config';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './Store/store';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={myTheme}>
        <Provider store={store}>
          <NavigatorInit />
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
