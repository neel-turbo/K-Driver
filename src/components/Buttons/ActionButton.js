import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONT_FAMILY, FONT_SIZE} from '../../utils/constant';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export const ActionButton = ({title, onPress, bg, color, width, icon}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bg,
        marginVertical: 8,
        borderRadius: 40,
        width: width || '90%',
      }}
      activeOpacity={0.5}
      onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {icon && (
          <Icon color={color} size={24} name={icon} />
        )}
        <Text
          style={{
            fontSize: FONT_SIZE.BIG,
            fontFamily: FONT_FAMILY.MEDIUM,
            padding: 12,
            color,
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
