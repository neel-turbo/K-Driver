import React from 'react';
import {Text, View, Button, StyleSheet, Image, Alert} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  COLORS,
  defaultImg,
  FONT_FAMILY,
  FONT_SIZE,
  SCREEN,
} from '../utils/constant';
import {Navlink} from '../components/Buttons/NavlinkBtn';
import key from '../asserts/key.png';
import doc from '../asserts/doc.png';
import car from '../asserts/car.png';
import toll from '../asserts/toll.png';
import payment from '../asserts/payment.png';
import terms from '../asserts/terms.png';
import help from '../asserts/union.png';
import logout from '../asserts/logout.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IMG_SIZE = 60;

export const CustomDrawer = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Image
            style={styles.imgBox}
            resizeMode="cover"
            source={{uri: defaultImg}}
          />
        </View>
        <View style={{marginLeft: 12}}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text1}>
            John Doe
          </Text>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text2}>
            Johndoe124@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.line} />
      <DrawerContentScrollView style={styles.scroll} {...props}>
        <Navlink logo={key} title="Change Password" onPress={() => {}} />
        <Navlink logo={doc} title="Documentation" onPress={() => {}} />
        <Navlink
          logo={car}
          title="Successful Ride"
          onPress={() => {
            navigation.navigate('SuccessfulRide');
          }}
        />
        <Navlink
          logo={car}
          title="Cancellation Ride"
          onPress={() => {
            navigation.navigate('CancelRide');
          }}
        />
        <Navlink logo={toll} title="Toll Receipt" onPress={() => {}} />
        <Navlink
          logo={payment}
          title="Payment Details"
          onPress={() => {
            navigation.navigate('PaymentDetails');
          }}
        />
        <Navlink
          logo={terms}
          title="Terms & Condition"
          onPress={() => {
            navigation.navigate('TermsAndCondition');
          }}
        />
        <Navlink
          logo={help}
          title="Help & Support"
          onPress={() => {
            navigation.navigate('HelpAndSupports');
          }}
        />
      </DrawerContentScrollView>
      <View style={styles.bottom}>
        <Navlink logo={logout} title="Logout" onPress={() => {
          console.warn("token removed");
           AsyncStorage.removeItem('@authtoken')
        }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  scroll: {
    paddingVertical: 8,
    paddingHorizontal: 22,
  },
  row: {
    height: SCREEN.HEIGHT * 0.15,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  imgBox: {height: IMG_SIZE, width: IMG_SIZE, borderRadius: IMG_SIZE / 2},
  text1: {
    fontSize: FONT_SIZE.LARGE,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.WHITE,
    width: SCREEN.WIDTH / 3,
  },
  text2: {
    fontSize: FONT_SIZE.SMALL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: '#B4C9F3',
    marginTop: 4,
    width: SCREEN.WIDTH / 3,
  },
  line: {
    height: 2.5,
    width: '100%',
    backgroundColor: '#2858B7',
    opacity: 0.6,
  },
  bottom: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
});
