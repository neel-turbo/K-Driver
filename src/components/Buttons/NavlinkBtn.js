import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONT_FAMILY, FONT_SIZE} from '../../utils/constant';

export const Navlink = ({title, onPress, logo}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <Image source={logo} style={styles.img} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {height: 22, width: 22, marginRight: 16},
  text: {
    fontSize: FONT_SIZE.LARGE,
    fontFamily: FONT_FAMILY.LIGHT,
    color: COLORS.WHITE,
    paddingVertical: 8,
  },
});
