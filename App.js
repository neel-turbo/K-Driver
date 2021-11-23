import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import MainNavigation from './src/navigation/mainNavigation';
import {HomeStack} from './src/navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const [token, setToken] = React.useState('');
  React.useEffect(() => {
    AsyncStorage.getItem('@authtoken').then(tkn => {
      setToken(tkn);
    });
  }, []);

  return (
    <NavigationContainer>
      {token ? <HomeStack /> : <MainNavigation />}
      {/* <MainNavigation />
      <HomeStack /> */}
    </NavigationContainer>
  );
}

export default App;
