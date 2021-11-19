import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {ActionButton} from '../../../components/Buttons/ActionButton';
import {
  COLORS,
  defaultImg,
  FONT_FAMILY,
  FONT_SIZE,
  HEIGHT,
} from '../../../utils/constant';

export const Step1 = () => {
	const navigation = useNavigation()
  return (
    <>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}></MapView>
      </View>
      <View style={styles.bottomSheet}>
        <View style={styles.box}>
          <View style={styles.line} />

          {/* content */}
          <View style={styles.row}>
            <View>
              <Text style={styles.text1}>Pickup</Text>
              <Text style={styles.text2}>6th Avaniue</Text>
            </View>
            <View>
              <Text style={styles.text1}>Destination</Text>
              <Text style={styles.text2}>Stewart street</Text>
            </View>
          </View>

          <View style={styles.line2} />

          <View style={styles.row}>
            <View style={styles.row2}>
              <Image source={{uri: defaultImg}} style={styles.img} />
              <View style={{marginLeft: 16}}>
                <Text style={styles.text_phone}>+91 254 2154 124</Text>
                <Text style={styles.text_name}>John Doe</Text>
                <Text style={styles.text_total}>Total Ride : 15+</Text>
              </View>
            </View>
            <View>
              <Text style={styles.star}>
                ★ <Text style={styles.text_rating}>4.8</Text>
              </Text>
              <Text style={styles.price}>$120</Text>
            </View>
          </View>

          <View style={styles.line2} />

          <View style={styles.row}>
            <Text style={styles.text_name}>Code verification</Text>
            <Text style={styles.code}>2587</Text>
          </View>

          <View style={styles.line2} />

          <View style={styles.actionBox}>
            <ActionButton onPress={() => navigation.navigate('Step2')} title="Verify" bg="#00A3FE" color="white" />
          </View>
        </View>
      </View>
    </>
  );
};

const IMG_SIZE = 60;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 390,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bottomSheet: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    bottom: 0,
    backgroundColor: 'white',
    // borderTopEndRadius:20,
    // borderTopStartRadius:20,
    elevation: 5,
  },
  box: {
    flex: 1,
  },
  line: {
    height: 6,
    width: 50,
    backgroundColor: '#DFDFDF',
    borderRadius: 8,
    marginVertical: 20,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  text1: {
    fontSize: FONT_SIZE.SMALL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.TEXT_GRAY,
  },
  text2: {
    fontSize: FONT_SIZE.LARGE,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.BLACK,
  },
  text_phone: {
    fontSize: FONT_SIZE.MEDIUM,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.BLACK,
  },
  text_name: {
    fontSize: FONT_SIZE.SMALL,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.BLACK,
  },
  text_total: {
    fontSize: FONT_SIZE.SMALL,
    fontFamily: FONT_FAMILY.LIGHT,
    color: COLORS.BLACK,
    marginTop: 4,
  },
  text_rating: {
    fontSize: FONT_SIZE.SMALL,
    fontFamily: FONT_FAMILY.LIGHT,
    color: COLORS.BLACK,
    marginTop: 4,
  },
  star: {
    fontSize: FONT_SIZE.BIG,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: '#EFB142',
  },
  price: {
    fontSize: FONT_SIZE.BIG,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    marginTop: 12,
  },
  code: {
    fontSize: FONT_SIZE.BIG + 5,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
  },
  line2: {
    height: 1,
    width: '100%',
    backgroundColor: '#E8E8E8',
    borderRadius: 8,
    marginVertical: 14,
  },
  actionBox: {
    flex: 1,
    alignItems: 'center',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    height: IMG_SIZE,
    width: IMG_SIZE,
    borderRadius: IMG_SIZE / 2,
  },
});
