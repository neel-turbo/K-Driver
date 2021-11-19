import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

export const IconBtn = ({uri, height, width, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={uri} style={{height, width}} />
    </TouchableOpacity>
  );
};
