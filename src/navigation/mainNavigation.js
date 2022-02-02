import React, { Component, useEffect, useState } from 'react';
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


const Drawer = createDrawerNavigator();


export default function mainNavigation() {

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
        <Drawer.Screen name="signUp" component={signUp} />
        <Drawer.Screen name="userVerification" component={userVerification} />
        <Drawer.Screen name="forgetPassword" component={forgetPassword} />
        <Drawer.Screen name="otp" component={otp} />
        <Drawer.Screen name="setPassword" component={setPassword} />
      </Drawer.Navigator>
    </>
  );
}
