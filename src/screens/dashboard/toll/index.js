import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {Back} from '../../../components/back';
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  SCREEN,
  STYLES,
} from '../../../utils/constant';
import FontIocn from 'react-native-vector-icons/Fontisto';
import IconMaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {ActionButton} from '../../../components/Buttons/ActionButton';

export const Toll = () => {
  return (
    <View style={styles.container}>
      <Back title="Add Toll Receipt" />
      <View style={styles.box1}>
        <Text style={styles.title}>Add Toll Receipt Price</Text>
        <Text style={[styles.content]}>
          Upload your toll receipt photo for verification
        </Text>
      </View>
      <View style={styles.row}>
        <TextInput style={[styles.input, {width: '35%'}]} value="1582" />
        <TextInput style={[styles.input, {width: '60%'}]} value="1582" />
      </View>

      <View style={styles.row2}>
        <View style={styles.upload}>
          <IconMaterialCommunityIcons
            color={'#909090'}
            size={24}
            name={'upload'}
          />
        </View>
        <Text style={[styles.content]}>Image files to upload</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>Select</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginVertical: 12}}>
        <TextInput style={[styles.input]} placeholder="Toll amount" />
      </View>
      <View style={styles.hr} />

      <View>
        <ActionButton
          icon="ios-add-circle-outline"
          width="100%"
          title="Add more"
          color="white"
          bg="#ccc"
        />
      </View>

      <View style={styles.absolte}>
        <ActionButton width="100%" title="Submit" color="white" bg="#00A3FE" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_GRAY,
    marginHorizontal: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  row2: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderStyle: 'dotted',
    padding: 14,
    borderColor: COLORS.TEXT_COLOR_GRAY,
  },
  text: {
    fontSize: FONT_SIZE.MEDIUM,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.BLACK,
    marginLeft: 12,
  },
  box1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  title: {
    fontSize: FONT_SIZE.BIG + 4,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.BLACK,
    marginLeft: 12,
  },
  content: {
    fontSize: FONT_SIZE.SMALL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.TEXT_COLOR_GRAY,
    marginLeft: 12,
  },
  input: {
    borderWidth: 0.5,
    borderColor: COLORS.GRAY,
    padding: 12,
    borderRadius: 20,
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.LARGE,
    color: '#003169',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#00A3FE',
    borderRadius: 12,
  },
  button_text: {
    fontSize: FONT_SIZE.LARGE,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.WHITE,
    paddingHorizontal: 25,
    paddingVertical: 3,
  },
  upload: {
    backgroundColor: '#E9E9E9',
    borderRadius: 25,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hr: {
    // position: 'absolute',
    height: 1.5,
    opacity: 0.5,
    backgroundColor: COLORS.GRAY_LIGHT,
    width: '50%',
    alignSelf: 'center',
  },
  absolte: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
