import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Clipboard
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
import IconAntDesign from 'react-native-vector-icons/dist/AntDesign';
import Toast from 'react-native-toast-message';
import OTPInputView from '@twotalltotems/react-native-otp-input';


export default userVerification = ({ navigation, route }) => {
  const [digitOne, setDigitOne] = useState('');
  const [digitTwo, setDigitTwo] = useState('');
  const [digitThree, setDigitThree] = useState('');
  const [digitFour, setDigitFour] = useState('');

  const [focusDigitOne, setFocusDigitOne] = useState(false);

  const [focusDigitTwo, setFocusDigitTwo] = useState(false);
  const [focusDigitThree, setFocusDigitThree] = useState(false);

  const [focusDigitFour, setFocusDigitFour] = useState(false);

  const [userEmail, setUserEmail] = useState('');

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

  useEffect(() => {
    const passedData = route.params;

    // console.log('eeeee', passedData)
    if (passedData) {
      setUserEmail(passedData.userEmail);
    }
  }, [route.params]);

  // -----------------------Validation and api implementation------------------------

  const handlesubmit = () => {
    if (
      digitOne == ''
    ) {
      // console.warn('abccccccccccc');
      Toast.show({
        type: 'error',
        text1: 'Please enter your OTP ',
      });
    } else {
      const body = {
        email: userEmail,
        otp: digitOne + digitTwo + digitThree + digitFour,
      };
      console.log('heeeeeeeeeeeee', body);
      (async () => {
        const rawResponse = await fetch(
          // 'http://mydevfactory.com/~devserver/kabou/api/driver/otp-verify',
          'http://kabou.us/api/driver/otp-verify',
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

          setTimeout(() => {
            try {
              AsyncStorage.setItem('userToken', JSON.stringify(content.data));
            } catch (error) { }

            // navigation.navigate('documentUpload');
            navigation.navigate('signIn');
          }, 1000);
        } else {
          Toast.show({
            type: 'error',
            text1: content.message,
          });
        }
      })();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
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
              style={{ flexDirection: 'row', alignItems: 'center' }}>
              <IconAntDesign
                color={colors.headerText}
                size={24}
                name={'arrowleft'}
              />
              <Text
                style={[styles.subText, { fontWeight: 'bold', fontSize: 18 }]}>
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
              <Text style={[styles.subText, { marginVertical: 0 }]}>
                Please type verification code send
              </Text>
              <Text
                style={[styles.subText, { marginVertical: 0, marginBottom: 15 }]}>
                to +917225373909
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  width: '100%',
                }}>

                <OTPInputView
                  style={{ width: '80%', height: 200 }}
                  pinCount={4}
                  editable
                  code={digitOne} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                  onCodeChanged = {code => { setDigitOne(code)}}
                  autoFocusOnLoad
                  codeInputFieldStyle={styles.underlineStyleBase}
                  codeInputHighlightStyle={styles.underlineStyleHighLighted}
                  onCodeFilled={(code) => {
                    console.log(`Code is ${code}, you are good to go!`)
                  }}
                />



                {/* <View
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
                </View> */}
              </View>
              <TouchableOpacity
                // onPress={() => navigation.navigate('documentUpload')}
                onPress={() => handlesubmit()}
                style={{ width: '100%' }}>
                <View style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>Submit</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{ width: '100%' }}>
                <Text
                  style={[styles.subText, { fontSize: 18, marginVertical: 30 }]}>
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
    textAlign: 'center',
  },
  underlineStyleBase: {
    width: 65,
    height: 80,
    borderWidth: 1,
    color: '#000000',
    borderRadius: 10,
    fontSize: 40,
    borderColor: '#DDDDDD'
  },

  underlineStyleHighLighted: {
    borderColor: "#000000",
  },
});
