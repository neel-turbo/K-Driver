import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONT_FAMILY, FONT_SIZE, SCREEN} from '../../utils/constant';
import FontIocn from 'react-native-vector-icons/Fontisto';
import MatrialIcon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MantrialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Label = ({title, color}) => {
  const isPaid = title == 'Paid' ? true : false;
  return (
    <View
      style={[styles.label, {backgroundColor: isPaid ? '#29C270' : '#FF4546'}]}>
      <View style={styles.row}>
        <AntIcon
          style={{marginLeft: 4}}
          name={isPaid ? 'checkcircleo' : 'closecircleo'}
          size={14}
          color="white"
        />
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

const CustomText = ({title, price}) => (
  <View style={[styles.row2]}>
    <Text style={[styles.carTxt, {color: 'gray'}]}>{title}</Text>
    <Text style={[styles.carTxt, {fontFamily: FONT_FAMILY.MEDIUM}]}>
      {price}
    </Text>
  </View>
);

export const PayemntCard = ({label}) => {
  const isPaid = label == 'Paid' ? true : false;
  return (
    <View style={styles.card}>
      <View style={styles.box}>
        <View style={[styles.row]}>
          <View style={styles.row}>
            <FontIocn name={'checkbox-passive'} size={14} color="#C9CCCF" />
            <MatrialIcon
              style={{marginLeft: 6}}
              name={'date-range'}
              size={16}
              color="#333333"
            />
            <Text style={{marginLeft: 4}}>Mon 16Sept, 2021</Text>
            <MatrialIcon
              style={{marginLeft: 6}}
              name={'access-time'}
              size={16}
              color="#333333"
            />
            <Text style={{marginLeft: 4}}>9:25 am</Text>
          </View>
          <>
            <Label title={label} />
            {/* <Label title="Successful" /> */}
          </>
        </View>

        <View style={[styles.row, styles.extRow]}>
          <View>
            <Text style={styles.carTxt}>R5248</Text>
            <Text style={styles.txtName}>Richard Wilson</Text>
          </View>
          <View>
            <Text
              style={[styles.amount, {color: isPaid ? '#29C270' : '#FF4546'}]}>
              $82.00
            </Text>
          </View>
        </View>

        <View style={styles.hr} />

        <View style={styles.flexBox}>
          <CustomText title="Ride cost" price="$120.00" />
          <CustomText title="Stopages time cost" price="$9.00" />
          <CustomText title="Waiting time cost" price="$5.00" />
          <CustomText title="Toll cost" price="$4.00" />
          <CustomText title="Tips cost" price="$15.00" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    //     height: SCREEN.HEIGHT * 0.202,
    width: '100%',
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 12,
  },
  box: {
    flex: 1,
    padding: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colum: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    backgroundColor: '#FF4546',
    position: 'absolute',
    right: -12,
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
  },
  text: {
    fontSize: FONT_SIZE.SMALL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: 'white',
    paddingHorizontal: 4,
  },
  extRow: {
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  carTxt: {
    fontSize: FONT_SIZE.SMALL,
    fontFamily: FONT_FAMILY.REGULAR,
    paddingHorizontal: 4,
    color: '#121212',
  },
  txtName: {
    fontSize: FONT_SIZE.MEDIUM,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: '#121212',
    paddingHorizontal: 4,
  },
  com_text: {
    fontSize: FONT_SIZE.MEDIUM,
    fontFamily: FONT_FAMILY.REGULAR,
    paddingHorizontal: 4,
    marginVertical: 2,
  },
  amount: {
    fontSize: FONT_SIZE.BIG,
    fontFamily: FONT_FAMILY.REGULAR,
    color: '#FF4546',
    paddingHorizontal: 4,
  },
  hr: {
    height: 0.5,
    width: '100%',
    backgroundColor: COLORS.PRIMARY,
    marginVertical: 2,
  },
  flexBox: {
    flex: 1,
    marginTop: 6,
  },
});