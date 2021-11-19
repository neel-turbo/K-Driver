import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {ActionButton} from '../../components/Buttons/ActionButton';
import {COLORS, FONT_FAMILY, FONT_SIZE, HEIGHT} from '../../utils/constant';

export const Home = () => {
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

          <View style={styles.actionBox}>
            <ActionButton onPress={() => navigation.navigate('Step1')} title="Accept" bg="#00A3FE" color="white" />
            <ActionButton title="Cancel" bg="#F5F5F5" color="#7A7C80" />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 450,
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
    height: '42%',
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
  line2: {
    height: 1,
    width: '100%',
    backgroundColor: '#E8E8E8',
    borderRadius: 8,
    marginTop: 20,
    // marginBottom:10
  },
  actionBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
