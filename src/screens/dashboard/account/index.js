import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Back} from '../../../components/back';
import {
  COLORS,
  defaultImg,
  FONT_FAMILY,
  FONT_SIZE,
  SCREEN,
} from '../../../utils/constant';
import {SearchBar} from '../../../components/Input/Searchbar';
import Icon from 'react-native-vector-icons/Feather';
import {Box} from '../../../components/Box/box';
import {useNavigation} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MyAccount = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imgbox}>
        <View>
          <Image
            style={styles.img}
            source={{
              uri: defaultImg,
            }}
          />
          <TouchableOpacity style={styles.box2} onPress={() => {}}>
            <Icon
              color={COLORS.WHITE}
              name="edit"
              size={20}
              style={{textAlign: 'center'}}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>
          Guru Karmakar
          {/* {profile.fname} {profile.lname} */}
        </Text>
      </View>

      <View style={{marginVertical: 12}}>
        <>
          <Box name="Change Password" onPress={() => {}} />
          <Box
            name="Successful Ride"
            onPress={() => {
              navigation.navigate('SuccessfulRide');
            }}
          />
          <Box
            name="Cancellation Ride"
            onPress={() => {
              navigation.navigate('CancelRide');
            }}
          />
          <Box
            name="Terms & Condition Help"
            onPress={() => {
              navigation.navigate('TermsAndCondition');
            }}
          />
          <Box
            name=" Help & Support"
            onPress={() => {
              navigation.navigate('HelpAndSupports');
            }}
          />
          <Box
            name="Logout"
            icon="logout"
            onPress={() => {
              console.warn('token removed');
              AsyncStorage.removeItem('@authtoken');
            }}
          />
        </>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND_GRAY,
    marginHorizontal: 12,
    marginTop: SCREEN.HEIGHT * 0.04,
  },
  imgbox: {
    marginTop: 30,
    // elevation: 5,
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
    borderColor: COLORS.PRIMARY,
    borderWidth: 2.5,
    // elevation:10
  },
  text: {
    fontSize: FONT_SIZE.BIG,
    fontFamily: FONT_FAMILY.MEDIUM,
    textAlign: 'center',
    marginTop: 16,
    color: COLORS.BLACK,
  },
  box: {
    marginTop: 40,
  },
  fpass: {
    fontSize: FONT_SIZE.SMALL,
    fontFamily: FONT_FAMILY.BOLD,
    textAlign: 'center',
    marginVertical: 25,
    color: COLORS.GRAY,
  },
  box2: {
    backgroundColor: COLORS.PRIMARY,
    position: 'absolute',
    right: 20,
    bottom: 2,
    padding: 4,
    borderRadius: 18,
  },
});
