import * as React from 'react';
import NavigatorInit from '../src/Navigator/navigatorInit';
import {ThemeProvider} from '@rneui/themed';
import {myTheme} from './Config';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store, {persistore} from './Store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
        <SafeAreaProvider>
          <ThemeProvider theme={myTheme}>
            <NavigatorInit />
          </ThemeProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
