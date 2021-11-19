import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import arrow from '../../asserts/arrow.png';
import {COLORS, FONT_FAMILY, FONT_SIZE} from '../../utils/constant';

export const Back = ({title}) => {
	const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={arrow} style={styles.img} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12,
//     marginHorizontal: 14,
  },
  img: {
    height: 16,
    width: 30,
    marginLeft:4
  },
  title: {
    fontSize: FONT_SIZE.LARGE,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.TEXT_COLOR_BLACK,
    marginLeft: 16,
  },
});
