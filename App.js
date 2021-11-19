import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';

import MainNavigation from './src/navigation/mainNavigation';
import {DashBoard} from './src/navigation/dashboardNavigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        defaultScreenOptions="mainNavigation"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="mainNavigation" component={MainNavigation} />
        <Stack.Screen name="Dashboard" component={DashBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
