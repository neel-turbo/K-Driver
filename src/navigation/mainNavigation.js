// import React from 'react';
// import {View, Text} from 'react-native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import signIn from '../screens/auth/signIn';
// import signUp from '../screens/auth/signUp';
// import splashScreen from '../screens/auth/splashScreen';
// import userVerification from '../screens/auth/userVerification';

// import account from '../screens/account/account';
// import documentUpload from '../screens/account/documentUpload';

// import forgetPassword from '../screens/resetPassword/forgetPassowrd';
// import otp from '../screens/resetPassword/otp';
// import setPassword from '../screens/resetPassword/setPassword';

// const Stack = createNativeStackNavigator();

// export default function mainNavigation() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Stack.Screen name="splashScreen" component={splashScreen} />

//       <Stack.Screen name="signIn" component={signIn} />
//       <Stack.Screen name="signUp" component={signUp} />
//       <Stack.Screen name="userVerification" component={userVerification} />

//       <Stack.Screen name="account" component={account} />

//       <Stack.Screen name="documentUpload" component={documentUpload} />

//       <Stack.Screen name="forgetPassword" component={forgetPassword} />
//       <Stack.Screen name="otp" component={otp} />

//       <Stack.Screen name="setPassword" component={setPassword} />
//     </Stack.Navigator>
//   );
// }



import React, { Component, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import signIn from '../screens/auth/signIn';
import signUp from '../screens/auth/signUp';
import splashScreen from '../screens/auth/splashScreen';
import userVerification from '../screens/auth/userVerification';

import account from '../screens/account/account';
import documentUpload from '../screens/account/documentUpload';

import forgetPassword from '../screens/resetPassword/forgetPassowrd';
import otp from '../screens/resetPassword/otp';
import setPassword from '../screens/resetPassword/setPassword';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerComponent from './../Components/DrawerComponent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// export function DrawerStack() {
//   return (
//     <Drawer.Navigator initialRouteName="Home">
//       <Stack.Screen name="Home" component={documentUpload} />
//       <Stack.Screen name="account" component={account} />
//     </Drawer.Navigator>
//   );
// }



export default function mainNavigation() {

  const HomeTabStack = () => {
    return (
      <Drawer.Navigator initialRouteName="documentUpload" drawerContent={(props) => (<DrawerComponent {...props} />)} screenOptions={{ headerShown: false}}>
        <Drawer.Screen name="documentUpload" component={documentUpload} />
        <Drawer.Screen name="account" component={account} />
      </Drawer.Navigator >
    )
  }


  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }} drawerContent={(props) => (<DrawerComponent {...props} />)}>
        <Drawer.Screen name="splashScreen" component={splashScreen} />
        <Drawer.Screen name="signIn" component={signIn} />
        <Drawer.Screen name="documentUpload" component={documentUpload} />
        <Drawer.Screen name="account" component={account} />
        {/* <Drawer.Screen name="Home" component={HomeTabStack} /> */}
        <Drawer.Screen name="signUp" component={signUp} />
        <Drawer.Screen name="userVerification" component={userVerification} />
        <Drawer.Screen name="forgetPassword" component={forgetPassword} />
        <Drawer.Screen name="otp" component={otp} />
        <Drawer.Screen name="setPassword" component={setPassword} />
      </Drawer.Navigator>
    </>
  );
}
