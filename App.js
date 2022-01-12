import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, SafeAreaView} from 'react-native';
import Toast from 'react-native-toast-message';

import mainNavigation from './src/navigation/mainNavigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="mainNavigation" component={mainNavigation} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

export default App;
