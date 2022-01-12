import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const calcH = heightInPixel => {
  return screenHeight * heightInPixel;
};
export const calcW = widthInPixel => {
  return screenWidth * widthInPixel;
};

export const buttonHeight = calcH(0.07);

export const allRadius = calcH(0.1);

export const allPadding = 15;

export const logoHeight = calcW(0.2);

export const logoWidth = calcW(0.38);

export const cardHeight = calcH(0.23);

export const cardButtonHeight = calcW(0.095);

export const storeData = async (Key, Value) => {
  try {
    const jsonValue = JSON.stringify(Value);
    await AsyncStorage.setItem(Key, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async Key => {
  try {
    const jsonValue = await AsyncStorage.getItem(Key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
