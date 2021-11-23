import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SCREEN, COLORS, FONT_FAMILY, FONT_SIZE} from '../utils/constant';
import {PaymentDetails} from '../screens/dashboard/payment-details';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import documentUpload from '../screens/account/documentUpload';
import {Toll} from '../screens/dashboard/toll';
import {MyAccount} from '../screens/dashboard/account';
import {HomeStack} from './stack';
import { Home } from '../screens/dashboard/home';
const Tab = createBottomTabNavigator();

export const DashBoardTab = () => {
  return (
    <Tab.Navigator
      defaultScreenOptions="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'md-home-sharp' : 'md-home-outline';
          } else if (route.name === 'Toll') {
            iconName = focused
              ? 'document-text-sharp'
              : 'document-text-outline';
          } else if (route.name === 'Payment') {
            iconName = focused ? 'arrow-down-circle' : 'arrow-down-circle';
          } else if (route.name === 'Doc') {
            iconName = focused ? 'md-documents-sharp' : 'md-documents-outline';
          } else if (route.name === 'Account') {
            return (
              <FontAwesomeIcon name="user-circle" size={size} color={color} />
            );
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: COLORS.PRIMARY,
        inactiveTintColor: COLORS.GRAY_LIGHT,
        tabStyle: {
          padding: 8,
        },
        style: {
          height: SCREEN.HEIGHT * 0.09,
          elevation: 10,
        },
        labelStyle: {
          fontSize: FONT_SIZE.SMALL,
          fontFamily: FONT_FAMILY.MEDIUM,
          // marginTop:2
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Toll" component={Toll} />
      <Tab.Screen name="Payment" component={PaymentDetails} />
      <Tab.Screen name="Doc" component={documentUpload} />
      <Tab.Screen name="Account" component={MyAccount} />
    </Tab.Navigator>
  );
};
