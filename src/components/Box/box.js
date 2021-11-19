import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
// import Icon from 'react-native-vector-icons/Ionicons';
import {FONT_FAMILY, FONT_SIZE, SCREEN, COLORS} from '../../utils/constant';

export const Box = ({name, onPress, icon}) => {
  // let x = 1;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, {elevation: 5}]}>
      <View style={styles.input}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View>
        <Icon
          color={COLORS.PRIMARY}
          style={{marginRight: 12}}
          name={icon || 'arrowright'}
          size={23}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    backgroundColor: COLORS.WHITE,
  },
  input: {
    width: SCREEN.WIDTH * 0.8,
    padding: 16,
  },
  text: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.GRAY,
    marginBottom: -2,
  },
});
