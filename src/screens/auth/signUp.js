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
import IconIonicons from 'react-native-vector-icons/dist/Ionicons';
import CheckBox from '@react-native-community/checkbox';

export default signUp = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');

  const [showHide, setShowHide] = useState(false);

  const [showHideCP, setShowHideCP] = useState(false);

  const [showHidePassword, setShowHidePassword] = useState(true);

  const [showHideCPassword, setShowHideCPassword] = useState(true);

  const [focusName, setFocusName] = useState(false);

  const [focusEmail, setFocusEmail] = useState(false);
  const [focusMobile, setFocusMobile] = useState(false);

  const [focusPassword, setFocusPassword] = useState(false);
  const [focusCPassword, setFocusCPassword] = useState(false);

  const showHidePasswordFun = () => {
    setShowHide(!showHide);
    setShowHidePassword(!showHidePassword);
  };

  const showHideCPasswordFun = () => {
    setShowHideCP(!showHideCP);
    setShowHideCPassword(!showHideCPassword);
  };

  const onFocusTextInputName = () => {
    setFocusName(true);
  };

  const onBlurTextInputName = () => {
    setFocusName(false);
  };

  const onFocusTextInputEmail = () => {
    setFocusEmail(true);
  };

  const onBlurTextInputEmail = () => {
    setFocusEmail(false);
  };

  const onFocusTextInputMobile = () => {
    setFocusMobile(true);
  };

  const onBlurTextInputMobile = () => {
    setFocusMobile(false);
  };

  const onFocusTextInputPassword = () => {
    setFocusPassword(true);
  };

  const onBlurTextInputPassword = () => {
    setFocusPassword(false);
  };

  const onFocusTextInputCPassword = () => {
    setFocusCPassword(true);
  };

  const onBlurTextInputCPassword = () => {
    setFocusCPassword(false);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          {/* <View style={styles.viewOne}>

          </View> */}

          <View style={styles.viewTwo}>
            <View
              style={{
                flex: 1,
                marginTop: 10,
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: allPadding,
              }}>
              <Image
                style={{
                  height: logoHeight,
                  width: logoWidth,
                  resizeMode: 'center',
                }}
                source={require('../../asserts/logo.png')}
              />
              <Text style={styles.headerText}>Create Account</Text>
              <Text style={styles.subText}>
                Input required details to get started
              </Text>
              <View
                style={
                  focusName === true
                    ? styles.activeBorder
                    : styles.inActiveBorder
                }>
                {focusName === true ? (
                  <IconAntDesign
                    color={colors.activeBorder}
                    size={24}
                    name={'user'}
                  />
                ) : (
                  <IconAntDesign
                    color={colors.inActiveBorder}
                    size={24}
                    name={'user'}
                  />
                )}
                <TextInput
                  style={styles.textInput}
                  placeholder="Name"
                  value={name}
                  onBlur={() => onBlurTextInputName()}
                  onFocus={() => onFocusTextInputName()}
                  onChangeText={text => setName(text)}
                />
              </View>
              <View
                style={
                  focusEmail === true
                    ? styles.activeBorder
                    : styles.inActiveBorder
                }>
                {focusEmail === true ? (
                  <IconFontisto
                    color={colors.activeBorder}
                    size={24}
                    name={'email'}
                  />
                ) : (
                  <IconFontisto
                    color={colors.inActiveBorder}
                    size={24}
                    name={'email'}
                  />
                )}
                <TextInput
                  style={styles.textInput}
                  placeholder="Email"
                  value={email}
                  onBlur={() => onBlurTextInputEmail()}
                  onFocus={() => onFocusTextInputEmail()}
                  onChangeText={text => setEmail(text)}
                />
              </View>

              <View
                style={
                  focusMobile === true
                    ? styles.activeBorder
                    : styles.inActiveBorder
                }>
                {focusMobile === true ? (
                  <IconIonicons
                    color={colors.activeBorder}
                    size={24}
                    name={'ios-call-outline'}
                  />
                ) : (
                  <IconIonicons
                    color={colors.inActiveBorder}
                    size={24}
                    name={'ios-call-outline'}
                  />
                )}
                <TextInput
                  style={styles.textInput}
                  keyboardType="numeric"
                  placeholder="Mobile Number"
                  value={mobile}
                  onBlur={() => onBlurTextInputMobile()}
                  onFocus={() => onFocusTextInputMobile()}
                  onChangeText={text => setMobile(text)}
                />
              </View>
              <View
                style={
                  focusPassword === true
                    ? styles.activeBorder
                    : styles.inActiveBorder
                }>
                {focusPassword === true ? (
                  <IconMaterialIcons
                    color={colors.activeBorder}
                    size={24}
                    name={'lock-outline'}
                  />
                ) : (
                  <IconMaterialIcons
                    color={colors.inActiveBorder}
                    size={24}
                    name={'lock-outline'}
                  />
                )}

                <TextInput
                  style={styles.textInput}
                  value={password}
                  secureTextEntry={showHidePassword}
                  placeholder="Password"
                  onChangeText={text => setPassword(text)}
                  onBlur={() => onBlurTextInputPassword()}
                  onFocus={() => onFocusTextInputPassword()}
                />
                {showHide === true ? (
                  <TouchableOpacity onPress={() => showHidePasswordFun()}>
                    {focusPassword === true ? (
                      <IconFeather
                        color={colors.activeBorder}
                        size={24}
                        name={'eye'}
                      />
                    ) : (
                      <IconFeather
                        color={colors.inActiveBorder}
                        size={24}
                        name={'eye'}
                      />
                    )}
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => showHidePasswordFun()}>
                    {focusPassword === true ? (
                      <IconFeather
                        color={colors.activeBorder}
                        size={24}
                        name={'eye-off'}
                      />
                    ) : (
                      <IconFeather
                        color={colors.inActiveBorder}
                        size={24}
                        name={'eye-off'}
                      />
                    )}
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={
                  focusCPassword === true
                    ? styles.activeBorder
                    : styles.inActiveBorder
                }>
                {focusCPassword === true ? (
                  <IconMaterialIcons
                    color={colors.activeBorder}
                    size={24}
                    name={'lock-outline'}
                  />
                ) : (
                  <IconMaterialIcons
                    color={colors.inActiveBorder}
                    size={24}
                    name={'lock-outline'}
                  />
                )}

                <TextInput
                  style={styles.textInput}
                  value={cPassword}
                  secureTextEntry={showHideCPassword}
                  placeholder="Confirm Password"
                  onChangeText={text => setCPassword(text)}
                  onBlur={() => onBlurTextInputCPassword()}
                  onFocus={() => onFocusTextInputCPassword()}
                />
                {showHideCP === true ? (
                  <TouchableOpacity onPress={() => showHideCPasswordFun()}>
                    {focusCPassword === true ? (
                      <IconFeather
                        color={colors.activeBorder}
                        size={24}
                        name={'eye'}
                      />
                    ) : (
                      <IconFeather
                        color={colors.inActiveBorder}
                        size={24}
                        name={'eye'}
                      />
                    )}
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => showHideCPasswordFun()}>
                    {focusCPassword === true ? (
                      <IconFeather
                        color={colors.activeBorder}
                        size={24}
                        name={'eye-off'}
                      />
                    ) : (
                      <IconFeather
                        color={colors.inActiveBorder}
                        size={24}
                        name={'eye-off'}
                      />
                    )}
                  </TouchableOpacity>
                )}
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  paddingHorizontal: 5,
                }}>
                <CheckBox
                  disabled={false}
                  tintColors={toggleCheckBox ? colors.buttonColor : null}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text
                  style={[
                    styles.subText,
                    {fontSize: 16, flex: 1, textAlign: 'left'},
                  ]}>
                  {' '}
                  Accept terms & conditions
                </Text>
              </View>

              <TouchableOpacity
                style={{width: '100%'}}
                onPress={() => navigation.navigate('userVerification')}>
                <View style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.viewThree}>
            <View style={{padding: allPadding, flex: 1}}>
              <View
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Text
                    style={[styles.subText, {fontSize: 16, marginVertical: 0}]}>
                    Already have a account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('signIn')}>
                    <Text
                      style={[
                        styles.subText,
                        {
                          color: colors.textHeader,
                          fontSize: 16,
                          fontWeight: 'bold',
                          marginVertical: 0,
                        },
                        ,
                      ]}>
                      {' '}
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
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
    width: '100%',
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
    width: '100%',
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
    paddingLeft: 10,
    // color: colors.activeBorder,
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
    marginVertical: 10,
    textAlign: 'center',
  },
});
