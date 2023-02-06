import * as React from 'react';
import NavigatorInit from '../src/Navigator/navigatorInit';
import {ThemeProvider} from '@rneui/themed';
import {myTheme} from './Config';


const App = () => {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <NavigatorInit />
      </ThemeProvider>
    </>
  );
};

export default App;
