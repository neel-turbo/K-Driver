import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FontIocn from 'react-native-vector-icons/Fontisto';
import {COLORS, FONT_FAMILY, FONT_SIZE} from '../../utils/constant';

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Icon
          style={{marginLeft: 12}}
          name={'search1'}
          size={18}
          color={COLORS.BACKGROUND_GRAY}
        />
        <TextInput style={styles.input} placeholder="Search..." />
      </View>

      <TouchableOpacity style={styles.date}>
        <FontIocn name={'date'} size={18} color={COLORS.TEXT_GRAY} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
//     marginHorizontal: 12,
    marginVertical: 8,
  },
  box: {
    backgroundColor: 'white',
    width: '82%',
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginLeft: 4,
    width: '82%',
    fontSize: FONT_SIZE.SMALL,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  date: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
});
