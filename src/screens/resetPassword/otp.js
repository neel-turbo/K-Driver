import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import colors from '../../asserts/colors.js/colors';
import {
  allPadding,
  allRadius,
  buttonHeight,
  calcH,
  calcW,
  logoHeight,
  logoWidth,
} from '../../utils/comon';
import IconFontisto from 'react-native-vector-icons/dist/Fontisto';
import IconMaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import IconFeather from 'react-native-vector-icons/dist/Feather';
import IconAntDesign from 'react-native-vector-icons/dist/AntDesign';

export default otp = ({navigation}) => {
  const [digitOne, setDigitOne] = useState(0);
  const [digitTwo, setDigitTwo] = useState(0);
  const [digitThree, setDigitThree] = useState(0);
  const [digitFour, setDigitFour] = useState(0);

  const [focusDigitOne, setFocusDigitOne] = useState(false);

  const [focusDigitTwo, setFocusDigitTwo] = useState(false);
  const [focusDigitThree, setFocusDigitThree] = useState(false);

  const [focusDigitFour, setFocusDigitFour] = useState(false);

  const onFocusTextInputDigitOne = () => {
    setFocusDigitOne(true);
  };

  const onBlurTextInputDigitOne = () => {
    setFocusDigitOne(false);
  };

  const onFocusTextInputDigitTwo = () => {
    setFocusDigitTwo(true);
  };

  const onBlurTextInputDigitTwo = () => {
    setFocusDigitTwo(false);
  };

  const onFocusTextInputDigitThree = () => {
    setFocusDigitThree(true);
  };

  const onBlurTextInputDigitThree = () => {
    setFocusDigitThree(false);
  };

  const onFocusTextInputDigitFour = () => {
    setFocusDigitFour(true);
  };

  const onBlurTextInputDigitFour = () => {
    setFocusDigitFour(false);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          {/* <View style={styles.viewOne}>

          </View> */}

          <View
            style={{
              position: 'absolute',
              left: 15,
              top: 15,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconAntDesign
                color={colors.headerText}
                size={24}
                name={'arrowleft'}
              />
              <Text
                style={[styles.subText, {fontWeight: 'bold', fontSize: 18}]}>
                {'   '}Back
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewTwo}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
                padding: allPadding,
              }}>
              <Image
                style={{
                  height: logoHeight,
                  width: logoWidth,
                  resizeMode: 'center',
                  marginBottom: 30,
                }}
                source={require('../../asserts/logo.png')}
              />
              <Text style={styles.headerText}>Verification Code</Text>
              <Text style={[styles.subText, {marginVertical: 0}]}>
                Please type verification code send
              </Text>
              <Text
                style={[styles.subText, {marginVertical: 0, marginBottom: 15}]}>
                to example@example.com
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View
                  style={
                    focusDigitOne === true
                      ? styles.activeBorder
                      : styles.inActiveBorder
                  }>
                  <TextInput
                    style={styles.textInput}
                    value={digitOne}
                    keyboardType="numeric"
                    maxLength={1}
                    onBlur={() => onBlurTextInputDigitOne()}
                    onFocus={() => onFocusTextInputDigitOne()}
                    onChangeText={text => setDigitOne(text)}
                  />
                </View>
                <View
                  style={
                    focusDigitTwo === true
                      ? styles.activeBorder
                      : styles.inActiveBorder
                  }>
                  <TextInput
                    style={styles.textInput}
                    value={digitTwo}
                    keyboardType="numeric"
                    maxLength={1}
                    onBlur={() => onBlurTextInputDigitTwo()}
                    onFocus={() => onFocusTextInputDigitTwo()}
                    onChangeText={text => setDigitTwo(text)}
                  />
                </View>
                <View
                  style={
                    focusDigitThree === true
                      ? styles.activeBorder
                      : styles.inActiveBorder
                  }>
                  <TextInput
                    style={styles.textInput}
                    value={digitThree}
                    keyboardType="numeric"
                    maxLength={1}
                    onBlur={() => onBlurTextInputDigitThree()}
                    onFocus={() => onFocusTextInputDigitThree()}
                    onChangeText={text => setDigitThree(text)}
                  />
                </View>
                <View
                  style={
                    focusDigitFour === true
                      ? styles.activeBorder
                      : styles.inActiveBorder
                  }>
                  <TextInput
                    style={styles.textInput}
                    value={digitFour}
                    keyboardType="numeric"
                    maxLength={1}
                    onBlur={() => onBlurTextInputDigitFour()}
                    onFocus={() => onFocusTextInputDigitFour()}
                    onChangeText={text => setDigitFour(text)}
                  />
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('setPassword')}
                style={{width: '100%'}}>
                <View style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>Submit</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{width: '100%'}}>
                <Text
                  style={[styles.subText, {fontSize: 18, marginVertical: 30}]}>
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewOne: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  viewTwo: {
    flex: 2,
  },
  viewThree: {
    flex: 1,
  },
  inActiveBorder: {
    width: '20%',
    borderColor: colors.inActiveBorder,
    borderWidth: 1,
    borderRadius: allRadius,
    marginVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: allPadding,
    alignItems: 'center',
    paddingVertical: 2,
  },
  activeBorder: {
    width: '20%',
    borderColor: colors.activeBorder,
    borderWidth: 1,
    borderRadius: allRadius,
    marginVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: allPadding,
    alignItems: 'center',
    paddingVertical: 2,
  },
  headerText: {
    fontSize: 24,
    color: colors.headerText,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subText: {
    fontSize: 16,
    color: colors.subHeader,
    marginVertical: 10,
    textAlign: 'center',
  },
  textInput: {
    fontSize: 16,
    flex: 1,
    // paddingLeft: 10,
    textAlign: 'center',
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: colors.buttonColor,
    height: buttonHeight,
    borderRadius: allRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonTextStyle: {
    fontSize: 18,
    color: colors.white,
    // marginVertical: 10,
    textAlign: 'center',
  },
});
