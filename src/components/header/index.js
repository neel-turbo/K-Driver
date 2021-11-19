import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {IconBtn} from '../IconBtn';
import humBurger from '../../asserts/humburger.png';
import logo from '../../asserts/header_logo.png';
import bell from '../../asserts/bell.png';

//building custom header
export const CustomHeader = () => {
  return (
    <View style={styles.header}>
      {/* <IconBtn
        onPress={() => navigation.toggleDrawer()}
        uri={humBurger}
        height={20}
        width={26}
      /> */}
      <Image source={logo} style={{width: 120, height: 45}} />
      <IconBtn uri={bell} height={25} width={23} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 8,
  },
});
