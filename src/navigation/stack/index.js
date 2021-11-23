import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CustomHeader} from '../../components/header';
import {Home} from '../../screens/dashboard/home';
import {Step1} from '../../screens/dashboard/screens/step1';
import {Step2} from '../../screens/dashboard/screens/step2';
import {Step3} from '../../screens/dashboard/screens/step3';
import {Step4} from '../../screens/dashboard/screens/step4';
import {CancelRide} from '../../screens/dashboard/cancel-ride/index';
import {SuccessfulRide} from '../../screens/dashboard/successful-ride/index';
import {PaymentDetails} from '../../screens/dashboard/payment-details/index';
import {TermsAndCondition} from '../../screens/dashboard/terms-and-condition/index';
import {HelpAndSupports} from '../../screens/dashboard/help-and-supports/index';
import { DashBoardTab } from '../dashboardNavigation';
import { Text } from 'react-native';

//create a stack
const Stack = createStackNavigator();
export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{
          header: () => <CustomHeader />,
        }}
        name="Home"
        component={DashBoardTab}
      />
      <Stack.Screen
        options={{
          header: () => <CustomHeader />,
        }}
        name="Step1"
        component={Step1}
      />
      <Stack.Screen
        options={{
          header: () => <CustomHeader />,
        }}
        name="Step2"
        component={Step2}
      />
      <Stack.Screen
        options={{
          header: () => <CustomHeader />,
        }}
        name="Step3"
        component={Step3}
      />
      <Stack.Screen
        options={{
          header: () => <CustomHeader />,
        }}
        name="Step4"
        component={Step4}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="CancelRide"
        component={CancelRide}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SuccessfulRide"
        component={SuccessfulRide}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="PaymentDetails"
        component={PaymentDetails}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="TermsAndCondition"
        component={TermsAndCondition}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="HelpAndSupports"
        component={HelpAndSupports}
      />
    </Stack.Navigator>
  );
};
