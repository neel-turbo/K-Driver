import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import signIn from '../screens/auth/signIn';
import signUp from '../screens/auth/signUp';
import splashScreen from '../screens/auth/splashScreen';
import userVerification from '../screens/auth/userVerification';

import account from '../screens/account/account';
import documentUpload from '../screens/account/documentUpload';

import forgetPassword from '../screens/resetPassword/forgetPassowrd';
import otp from '../screens/resetPassword/otp';
import setPassword from '../screens/resetPassword/setPassword';

const Stack = createNativeStackNavigator();


export default function mainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="splashScreen" component={splashScreen} />

      <Stack.Screen name="signIn" component={signIn} />
      <Stack.Screen name="signUp" component={signUp} />
      <Stack.Screen name="userVerification" component={userVerification} />

      <Stack.Screen name="account" component={account} />

      <Stack.Screen name="documentUpload" component={documentUpload} />

      <Stack.Screen name="forgetPassword" component={forgetPassword} />
      <Stack.Screen name="otp" component={otp} />

      <Stack.Screen name="setPassword" component={setPassword} />
    </Stack.Navigator>
  );
}
