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
  Alert,
} from 'react-native';
import colors from '../../asserts/colors.js/colors';
import {
  allPadding,
  allRadius,
  buttonHeight,
  calcH,
  calcW,
  cardButtonHeight,
  cardHeight,
  logoHeight,
  logoWidth,
} from '../../utils/comon';
import IconFontisto from 'react-native-vector-icons/dist/Fontisto';
import IconMaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import IconFeather from 'react-native-vector-icons/dist/Feather';
import IconAntDesign from 'react-native-vector-icons/dist/AntDesign';
import IconMaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import DocumentPicker from 'react-native-document-picker';

export default documentUpload = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showHide, setShowHide] = useState(false);

  const [showHidePassword, setShowHidePassword] = useState(true);

  const [focusEmail, setFocusEmail] = useState(false);

  const [focusPassword, setFocusPassword] = useState(false);

  const showHidePasswordFun = () => {
    setShowHide(!showHide);
    setShowHidePassword(!showHidePassword);
  };

  const onFocusTextInputEmail = () => {
    setFocusEmail(true);
  };

  const onBlurTextInputEmail = () => {
    setFocusEmail(false);
  };

  const onFocusTextInputPassword = () => {
    setFocusPassword(true);
  };

  const onBlurTextInputPassword = () => {
    setFocusPassword(false);
  };

  const DocumentPickerFun = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
        Alert.alert('No file selected');
      } else {
        throw err;
      }
    }
  };

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
              {'   '}Documentation
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{flex: 1, marginTop: 60}}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.viewTwo}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
                // padding: allPadding,
              }}>
              <View style={styles.singleItemStyle}>
                <Text style={styles.headerText}>
                  Driving Licence Front & Back
                </Text>
                <Text style={styles.subText}>
                  Upload your Driving Licence Front & back for verification
                </Text>

                <View style={styles.rowParentView}>
                  <View style={styles.rowChildView}>
                    <View
                      style={{
                        backgroundColor: '#E9E9E9',
                        borderRadius: 25,
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <IconMaterialCommunityIcons
                        color={'#909090'}
                        size={24}
                        name={'upload'}
                      />
                    </View>

                    <Text style={[styles.subText, {fontWeight: 'bold'}]}>
                      Image file to upload
                    </Text>

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => DocumentPickerFun()}>
                      <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Select File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.rowChildView}>
                    <View
                      style={{
                        backgroundColor: '#E9E9E9',
                        borderRadius: 25,
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <IconMaterialCommunityIcons
                        color={'#909090'}
                        size={24}
                        name={'upload'}
                      />
                    </View>
                    <Text style={[styles.subText, {fontWeight: 'bold'}]}>
                      Image file to upload
                    </Text>

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => DocumentPickerFun()}>
                      <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Select File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.singleItemStyle}>
                <Text style={styles.headerText}>Insurance Doc</Text>
                <Text style={styles.subText}>
                  Upload your Insurance Doc Front & back for verification
                </Text>

                <View style={styles.rowParentView}>
                  <View style={styles.rowChildView}>
                    <View
                      style={{
                        backgroundColor: '#E9E9E9',
                        borderRadius: 25,
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <IconMaterialCommunityIcons
                        color={'#909090'}
                        size={24}
                        name={'upload'}
                      />
                    </View>

                    <Text style={[styles.subText, {fontWeight: 'bold'}]}>
                      Image file to upload
                    </Text>

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => DocumentPickerFun()}>
                      <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Select File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.rowChildView}>
                    <View
                      style={{
                        backgroundColor: '#E9E9E9',
                        borderRadius: 25,
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <IconMaterialCommunityIcons
                        color={'#909090'}
                        size={24}
                        name={'upload'}
                      />
                    </View>
                    <Text style={[styles.subText, {fontWeight: 'bold'}]}>
                      Image file to upload
                    </Text>

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => DocumentPickerFun()}>
                      <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Select File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.singleItemStyle}>
                <Text style={styles.headerText}>Car Registration Doc</Text>
                <Text style={styles.subText}>
                  Upload your Car Registration Front & back for verification
                </Text>

                <View style={styles.rowParentView}>
                  <View style={styles.rowChildView}>
                    <View
                      style={{
                        backgroundColor: '#E9E9E9',
                        borderRadius: 25,
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <IconMaterialCommunityIcons
                        color={'#909090'}
                        size={24}
                        name={'upload'}
                      />
                    </View>

                    <Text style={[styles.subText, {fontWeight: 'bold'}]}>
                      Image file to upload
                    </Text>

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => DocumentPickerFun()}>
                      <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Select File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.rowChildView}>
                    <View
                      style={{
                        backgroundColor: '#E9E9E9',
                        borderRadius: 25,
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <IconMaterialCommunityIcons
                        color={'#909090'}
                        size={24}
                        name={'upload'}
                      />
                    </View>
                    <Text style={[styles.subText, {fontWeight: 'bold'}]}>
                      Image file to upload
                    </Text>

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => DocumentPickerFun()}>
                      <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Select File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.singleItemStyle}>
                <Text style={styles.headerText}>Car Image Front & Back</Text>
                <Text style={styles.subText}>
                  Upload your Car Doc Front & back for verification
                </Text>

                <View style={styles.rowParentView}>
                  <View style={styles.rowChildView}>
                    <View
                      style={{
                        backgroundColor: '#E9E9E9',
                        borderRadius: 25,
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <IconMaterialCommunityIcons
                        color={'#909090'}
                        size={24}
                        name={'upload'}
                      />
                    </View>

                    <Text style={[styles.subText, {fontWeight: 'bold'}]}>
                      Image file to upload
                    </Text>

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => DocumentPickerFun()}>
                      <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Select File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.rowChildView}>
                    <View
                      style={{
                        backgroundColor: '#E9E9E9',
                        borderRadius: 25,
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <IconMaterialCommunityIcons
                        color={'#909090'}
                        size={24}
                        name={'upload'}
                      />
                    </View>
                    <Text style={[styles.subText, {fontWeight: 'bold'}]}>
                      Image file to upload
                    </Text>

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => DocumentPickerFun()}>
                      <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Select File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={[styles.singleItemStyle, {borderBottomWidth: 0}]}>
                <Text style={styles.headerText}>Car Other Images</Text>
                <Text style={styles.subText}>
                  Car Image Front & Back number, Interior 1 & Interior 2, Side
                  1, Side 2.
                </Text>

                <View style={styles.rowParentView}>
                  <View style={styles.rowChildView}>
                    <View
                      style={{
                        backgroundColor: '#E9E9E9',
                        borderRadius: 25,
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <IconMaterialCommunityIcons
                        color={'#909090'}
                        size={24}
                        name={'upload'}
                      />
                    </View>

                    <Text style={[styles.subText, {fontWeight: 'bold'}]}>
                      Image file to upload
                    </Text>

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => DocumentPickerFun()}>
                      <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Select File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.rowChildView}>
                    <View
                      style={{
                        backgroundColor: '#E9E9E9',
                        borderRadius: 25,
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <IconMaterialCommunityIcons
                        color={'#909090'}
                        size={24}
                        name={'upload'}
                      />
                    </View>
                    <Text style={[styles.subText, {fontWeight: 'bold'}]}>
                      Image file to upload
                    </Text>

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => DocumentPickerFun()}>
                      <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Select File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.rowParentView}>
                  <View style={styles.rowChildView}>
                    <View
                      style={{
                        backgroundColor: '#E9E9E9',
                        borderRadius: 25,
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <IconMaterialCommunityIcons
                        color={'#909090'}
                        size={24}
                        name={'upload'}
                      />
                    </View>

                    <Text style={[styles.subText, {fontWeight: 'bold'}]}>
                      Image file to upload
                    </Text>

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => DocumentPickerFun()}>
                      <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Select File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.rowChildView}>
                    <View
                      style={{
                        backgroundColor: '#E9E9E9',
                        borderRadius: 25,
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <IconMaterialCommunityIcons
                        color={'#909090'}
                        size={24}
                        name={'upload'}
                      />
                    </View>
                    <Text style={[styles.subText, {fontWeight: 'bold'}]}>
                      Image file to upload
                    </Text>

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => DocumentPickerFun()}>
                      <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Select File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.rowParentView}>
                  <View style={styles.rowChildView}>
                    <View
                      style={{
                        backgroundColor: '#E9E9E9',
                        borderRadius: 25,
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <IconMaterialCommunityIcons
                        color={'#909090'}
                        size={24}
                        name={'upload'}
                      />
                    </View>

                    <Text style={[styles.subText, {fontWeight: 'bold'}]}>
                      Image file to upload
                    </Text>

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => DocumentPickerFun()}>
                      <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Select File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.rowChildView}>
                    <View
                      style={{
                        backgroundColor: '#E9E9E9',
                        borderRadius: 25,
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <IconMaterialCommunityIcons
                        color={'#909090'}
                        size={24}
                        name={'upload'}
                      />
                    </View>
                    <Text style={[styles.subText, {fontWeight: 'bold'}]}>
                      Image file to upload
                    </Text>

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => DocumentPickerFun()}>
                      <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Select File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{width: '100%', margin: 15, paddingHorizontal: 15}}
                onPress={() => navigation.navigate('account')}>
                <View style={[styles.buttonStyle, {height: buttonHeight}]}>
                  <Text style={[styles.buttonTextStyle, {fontSize: 18}]}>
                    Submit
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
    fontSize: 18,
    color: colors.headerText,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    color: colors.subHeader,
    marginVertical: 10,
    textAlign: 'center',
  },
  textInput: {
    fontSize: 16,
    flex: 1,
    paddingLeft: 10,
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: colors.buttonColor,
    height: cardButtonHeight,
    borderRadius: allRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonTextStyle: {
    fontSize: 14,
    color: colors.white,
    // marginVertical: 10,
  },
  singleItemStyle: {
    width: '100%',
    borderBottomWidth: 2,
    borderColor: '#E8E8E8',
    padding: allPadding,
  },
  rowParentView: {
    flexDirection: 'row',
    height: cardHeight,
    marginBottom: 30,
  },
  rowChildView: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.cardBorder,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    padding: allPadding,
    marginHorizontal: 10,
  },
});
