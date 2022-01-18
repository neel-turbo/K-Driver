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
import IconSimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import IconEntypo from 'react-native-vector-icons/dist/Entypo';

import CheckBox from '@react-native-community/checkbox';

import Toast from 'react-native-toast-message';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default account = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [name, setName] = useState('');

  const [mobile, setMobile] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

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
  const [userData, setUserData] = useState(null)

  useEffect(async() => {
    const data = JSON.parse(await AsyncStorage.getItem('userToken'))
    setUserData(data)
  }, [])


  // ----------------------------------------------------------------------------------------------------

  const handlesubmit = () => {
    if (name.length == 0) {
      Toast.show({
        type: 'error',
        text1: 'Please enter your name ',
      });
    } else if (mobile.length == 0) {
      Toast.show({
        type: 'error',
        text1: 'Please enter your mobile ',
      });
    } else if (street.length == 0) {
      Toast.show({
        type: 'error',
        text1: 'Please enter your street ',
      });
    } else if (city.length == 0) {
      Toast.show({
        type: 'error',
        text1: 'Please enter your city ',
      });
    } else if (zip.length == 0) {
      Toast.show({
        type: 'error',
        text1: 'Please enter your Zip ',
      });
    } else {
      const body = {        
        name: name,
        cellphone: mobile,
        street: street,
        city: city,
        zip: zip,
      };
      (async () => {
        const rawResponse = await fetch(
          'http://kabou.us/api/driver/update-profile',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          },
        );
        const content = await rawResponse.json();

        console.log(content);
        if (content.success) {
          Toast.show({
            type: 'success',
            text1: content.message,
          });
          console.log('hellllluuuuuuuuuuuuuu');
        } else {
          Toast.show({
            type: 'error',
            text1: content.message,
          });
        }
      })();
    }
  };

  // --------------------Profile image upload here---------------------------------------------------

  const [filePath, setFilePath] = useState({});
  const chooseFile = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    // launchCamera(options, callback); launchImageLibrary

    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        console.log(response);
        setFilePath(source);
      }
    });
  };

  console.log('userData========>', userData);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
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
            zIndex: 15,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconAntDesign
              color={colors.headerText}
              size={24}
              name={'arrowleft'}
            />
            <Text style={[styles.subText, {fontWeight: 'bold', fontSize: 18}]}>
              {'   '}Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.viewTwo}>
            <View
              style={{
                flex: 1,
                marginTop: 10,
                justifyContent: 'flex-end',
                alignItems: 'center',
                padding: allPadding,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 20,
                  marginTop: 30,
                }}>
                <View
                  style={{
                    borderRadius: 78,
                  }}>
                  <Image
                    style={{
                      height: 128,
                      width: 128,
                      resizeMode: 'cover',
                      overflow: 'hidden',
                      borderRadius: 78,
                      borderColor: colors.buttonColor,
                      borderWidth: 2,
                    }}
                    source={require('../../asserts/user.jpeg')}
                  />
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: '68%',
                      backgroundColor: colors.white,
                      padding: 15,
                      borderRadius: 30,
                      elevation: 10,
                    }}
                    onPress={() => chooseFile()}>
                    <IconEntypo color={'#003169'} size={24} name={'camera'} />
                  </TouchableOpacity>
                </View>

                <Text
                  style={[
                    styles.headerText,
                    {marginVertical: 0, fontSize: 18, marginTop: 15},
                  ]}>
                  Jhon Deo
                </Text>
                <Text
                  style={[styles.subText, {marginVertical: 0, fontSize: 18}]}>
                  JhonDeo123@gmail.com
                </Text>
              </View>

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
                <TouchableOpacity>
                  <Text style={{color: colors.cardBorder}}>Edit</Text>
                </TouchableOpacity>
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
                <TouchableOpacity>
                  <Text style={{color: colors.cardBorder}}>Edit</Text>
                </TouchableOpacity>
              </View>

              <View
                style={
                  focusEmail === true
                    ? styles.activeBorder
                    : styles.inActiveBorder
                }>
                {focusEmail === true ? (
                  <IconSimpleLineIcons
                    color={colors.activeBorder}
                    size={24}
                    name={'directions'}
                  />
                ) : (
                  <IconSimpleLineIcons
                    color={colors.inActiveBorder}
                    size={24}
                    name={'directions'}
                  />
                )}
                <TextInput
                  style={styles.textInput}
                  placeholder="Street"
                  value={street}
                  onBlur={() => onBlurTextInputEmail()}
                  onFocus={() => onFocusTextInputEmail()}
                  onChangeText={text => setStreet(text)}
                />
              </View>

              <View
                style={
                  focusPassword === true
                    ? styles.activeBorder
                    : styles.inActiveBorder
                }>
                {focusPassword === true ? (
                  <IconSimpleLineIcons
                    color={colors.activeBorder}
                    size={24}
                    name={'location-pin'}
                  />
                ) : (
                  <IconSimpleLineIcons
                    color={colors.inActiveBorder}
                    size={24}
                    name={'location-pin'}
                  />
                )}

                <TextInput
                  style={styles.textInput}
                  value={city}
                  placeholder="City"
                  onChangeText={text => setCity(text)}
                  onBlur={() => onBlurTextInputPassword()}
                  onFocus={() => onFocusTextInputPassword()}
                />
              </View>
              <View
                style={
                  focusCPassword === true
                    ? styles.activeBorder
                    : styles.inActiveBorder
                }>
                {focusCPassword === true ? (
                  <IconIonicons
                    color={colors.activeBorder}
                    size={24}
                    name={'pin-outline'}
                  />
                ) : (
                  <IconIonicons
                    color={colors.inActiveBorder}
                    size={24}
                    name={'pin-outline'}
                  />
                )}

                <TextInput
                  style={styles.textInput}
                  keyboardType="numeric"
                  value={zip}
                  placeholder="Zip"
                  onChangeText={text => setZip(text)}
                  onBlur={() => onBlurTextInputCPassword()}
                  onFocus={() => onFocusTextInputCPassword()}
                />
              </View>
              {/* handlesubmit */}
              <TouchableOpacity
                style={{width: '100%'}}
                // onPress={() => navigation.navigate('')}>
                onPress={() => handlesubmit()}>
                <View style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>Update</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{width: '100%'}}
                onPress={() => navigation.navigate('')}>
                <View
                  style={[styles.buttonStyle, {backgroundColor: '#F5F5F5'}]}>
                  <Text style={[styles.buttonTextStyle, {color: '#7A7C80'}]}>
                    Change Password
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
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
    marginVertical: 5,
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
    flexDirection: 'row',
    paddingHorizontal: allPadding,
    alignItems: 'center',
    marginVertical: 5,
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
    marginTop: 10,
  },
  buttonTextStyle: {
    fontSize: 18,
    color: colors.white,
    marginVertical: 0,
    textAlign: 'center',
  },
});
