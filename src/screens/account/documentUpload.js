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
  Alert,
  Modal,
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

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import DocumentPicker from 'react-native-document-picker';
import { ImagePickerModal } from './../../Components/image-picker-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';

export default documentUpload = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showHide, setShowHide] = useState(false);

  const [showHidePassword, setShowHidePassword] = useState(true);

  const [focusEmail, setFocusEmail] = useState(false);

  const [focusPassword, setFocusPassword] = useState(false);

  const [vehicleData, setVehicleData] = useState(null)

  const [vehicle, setVehicle] = useState('')


  useEffect(() => {

    var config = {
      method: 'get',
      url: 'http://kabou.us/api/driver/listVehicle'
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setVehicleData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  console.log('vehicleData=====>', vehicleData);





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

  // --------------------------------------------------------------------------------------

  const [userToken, setUserToken] = useState('');

  const [filePathDlFront, setFilePathDlFront] = useState(null);
  const [filePathDlBack, setFilePathDlBack] = useState(null);

  const [visibleDlFront, setVisibleDlFront] = useState(null);
  const [visibleDlBack, setVisibleDlBack] = useState(null);

  const [filePathInsFront, setFilePathInsFront] = useState(null);
  const [filePathInsBack, setFilePathInsBack] = useState(null);

  const [visibleInsFront, setVisibleInsFront] = useState(null);
  const [visibleInsBack, setVisibleInsBack] = useState(null);

  const [visibleCarRegFront, setVisibleCarRegFront] = useState(null);
  const [visibleCarRegBack, setVisibleCarRegBack] = useState(null);

  const [filePathCarRegFront, setFilePathCarRegFront] = useState(null);
  const [filePathCarRegBack, setFilePathCarRegBack] = useState(null);

  const [visibleCarImageBack, setVisibleCarImageBack] = useState(null);
  const [visibleCarImageFront, setVisibleCarImageFront] = useState(null);

  const [filePathCarImageFront, setFilePathCarImageFront] = useState(null);
  const [filePathCarImageBack, setFilePathCarImageBack] = useState(null);

  // ---------------------------------------------------------------------------------------------

  const [filePathCarPhotoFront, setFilePathCarPhotoFront] = useState(null);
  const [filePathCarPhotoBack, setFilePathCarPhotoBack] = useState(null);

  const [visibleCarPhotoFront, setVisibleCarPhotoFront] = useState(null);
  const [visibleCarPhotoBack, setVisibleCarPhotoBack] = useState(null);

  const [filePathCarSideFront, setFilePathCarSideFront] = useState(null);
  const [filePathCarSideBack, setFilePathCarSideBack] = useState(null);

  const [visibleCarSideFront, setVisibleCarSideFront] = useState(null);
  const [visibleCarSideBack, setVisibleCarSideBack] = useState(null);

  const [filePathCarInteriorFront, setFilePathCarInteriorFront] =
    useState(null);
  const [filePathCarInteriorBack, setFilePathCarInteriorBack] = useState(null);

  const [visibleCarInteriorFront, setVisibleCarInteriorFront] = useState(null);
  const [visibleCarInteriorBack, setVisibleCarInteriorBack] = useState(null);

  ////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const { token } = JSON.parse(await AsyncStorage.getItem('userToken'))
    if (token) {
      setUserToken(token);
    }
  };

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem(userToken);
  //     if (value !== null) {
  //       // value previously
  //       console.log('TestUser', value);
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  const onImageLibraryPressCarPhotoFront = React.useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
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
        console.log('You can also display the image using data====>', response);
        setVisibleCarPhotoFront(false);
        setFilePathCarPhotoFront(source);
      }
    });
  }, []);

  const onCameraPressCarPhotoFront = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchCamera(options, response => {
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
        console.log('', response);
        setVisibleCarPhotoFront(false);
        setFilePathCarPhotoFront(source);
      }
    });
  }, []);

  //////////////////////////////////////////////////////////////////

  const onImageLibraryPressCarPhotoBack = React.useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
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
        console.log('You can also display the image using data====>', response);
        setVisibleCarPhotoBack(false);
        setFilePathCarPhotoBack(source);
      }
    });
  }, []);

  const onCameraPressCarPhotoBack = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchCamera(options, response => {
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
        console.log('', response);
        setVisibleCarPhotoBack(false);
        setFilePathCarPhotoBack(source);
      }
    });
  }, []);

  //////////////////////////////////////////////////////////////////

  const onImageLibraryPressCarSideFront = React.useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
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
        console.log('You can also display the image using data====>', response);
        setVisibleCarSideFront(false);
        setFilePathCarSideFront(source);
      }
    });
  }, []);

  const onCameraPressCarSideFront = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchCamera(options, response => {
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
        console.log('', response);
        setVisibleCarSideFront(false);
        setFilePathCarSideFront(source);
      }
    });
  }, []);

  //////////////////////////////////////////////////////////////////

  const onImageLibraryPressCarSideBack = React.useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
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
        console.log('You can also display the image using data====>', response);
        setVisibleCarSideBack(false);
        setFilePathCarSideBack(source);
      }
    });
  }, []);

  const onCameraPressCarSideBack = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchCamera(options, response => {
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
        console.log('', response);
        setVisibleCarSideBack(false);
        setFilePathCarSideBack(source);
      }
    });
  }, []);

  //////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////

  const onImageLibraryPressCarInteriorFront = React.useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
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
        console.log('You can also display the image using data====>', response);
        setVisibleCarInteriorFront(false);
        setFilePathCarInteriorFront(source);
      }
    });
  }, []);

  const onCameraPressCarInteriorFront = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchCamera(options, response => {
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
        console.log('', response);
        setVisibleCarInteriorFront(false);
        setFilePathCarInteriorFront(source);
      }
    });
  }, []);

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const onImageLibraryPressCarInteriorBack = React.useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
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
        console.log('You can also display the image using data====>', response);
        setVisibleCarInteriorBack(false);
        setFilePathCarInteriorBack(source);
      }
    });
  }, []);

  const onCameraPressCarInteriorBack = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchCamera(options, response => {
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
        console.log('', response);
        setVisibleCarInteriorBack(false);
        setFilePathCarInteriorBack(source);
      }
    });
  }, []);

  //////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////

  const onImageLibraryPressCarImageBack = React.useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
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
        console.log('You can also display the image using data====>', response);
        setVisibleCarImageBack(false);
        setFilePathCarImageBack(source);
      }
    });
  }, []);

  const onCameraPressCarImageBack = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchCamera(options, response => {
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
        console.log('', response);
        setVisibleCarImageBack(false);
        setFilePathCarImageBack(source);
      }
    });
  }, []);

  //////////////////////////////////////////////////////////////////

  const onImageLibraryPressCarImageFront = React.useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
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
        console.log('You can also display the image using data====>', response);
        setVisibleCarImageFront(false);
        setFilePathCarImageFront(source);
      }
    });
  }, []);

  const onCameraPressCarImageFront = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchCamera(options, response => {
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
        console.log('', response);
        setVisibleCarImageFront(false);
        setVisibleCarImageFront(source);
      }
    });
  }, []);

  ///////////////////////////////////////////////////////////////////

  const onImageLibraryPressCarRegFront = React.useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
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
        console.log('You can also display the image using data====>', response);
        setVisibleCarRegFront(false);
        setFilePathCarRegFront(source);
      }
    });
  }, []);

  const onCameraPressCarRegFront = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchCamera(options, response => {
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
        console.log('', response);
        setVisibleCarRegFront(false);
        setFilePathCarRegFront(source);
      }
    });
  }, []);

  const onImageLibraryPressCarRegBack = React.useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
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
        console.log('You can also display the image using data====>', response);
        setVisibleCarRegBack(false);
        setFilePathCarRegBack(source);
      }
    });
  }, []);

  const onCameraPressCarRegBack = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchCamera(options, response => {
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
        console.log('', response);
        setVisibleCarRegBack(false);
        setFilePathCarRegBack(source);
      }
    });
  }, []);

  const onImageLibraryPressInsBack = React.useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
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
        console.log('You can also display the image using data====>', response);
        setVisibleInsBack(false);
        setFilePathInsBack(source);
      }
    });
  }, []);

  const onCameraPressInsBack = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchCamera(options, response => {
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
        console.log('', response);
        setVisibleInsBack(false);
        setFilePathInsBack(source);
      }
    });
  }, []);

  const onImageLibraryPressInsFront = React.useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };

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
        console.log('You can also display the image using data====>', response);
        setVisibleInsBack(false);
        setFilePathInsFront(source);
      }
    });
  }, []);

  const onCameraPressInsFront = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };

    launchCamera(options, response => {
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
        console.log('', response);
        setVisibleDlBack(false);
        setFilePathInsFront(source);
      }
    });
  }, []);

  const onImageLibraryPressBack = React.useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };

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
        console.log('You can also display the image using data====>', response);
        setVisibleDlBack(false);
        setFilePathDlBack(source);
      }
    });
  }, []);

  const onCameraPressBack = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };

    launchCamera(options, response => {
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

        console.log('', response);
        setVisibleDlBack(false);
        setFilePathDlBack(source);
      }
    });
  }, []);

  const onImageLibraryPress = React.useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };

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
        console.log('You can also display the image using data====>', response);
        setVisibleDlFront(false);
        setFilePathDlFront(source);
      }
    });
  }, []);

  const onCameraPress = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };

    launchCamera(options, response => {
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

        console.log('', response);
        setVisibleDlFront(false);
        setFilePathDlFront(source);
      }
    });
  }, []);

  const handleSubmit = async () => {
    //     const body = {
    //     "photo_car_back":image file,
    //     "photo_car_front" : image file,
    //     "car_interior_front" : image file,
    //     "car_interior_back" : image file,
    //     "car_side1" : image file,
    //     "car_side2" : image file,
    //     "vehicle_type" : id of list vehicle
    // }
    if (filePathDlFront == null) {
      Toast.show({
        type: 'error',
        text1: 'Please upload driving Licence Front image',
      });
    } else if (filePathDlBack == null) {
      Toast.show({
        type: 'error',
        text1: 'Please upload driving Licence Back image',
      });
    } else if (filePathInsFront == null) {
      Toast.show({
        type: 'error',
        text1: 'Please upload Front Insurance image  ',
      });
    } else if (filePathInsBack == null) {
      Toast.show({
        type: 'error',
        text1: 'Please upload Back Insurance image',
      });
    } else if (filePathCarRegFront == null) {
      Toast.show({
        type: 'error',
        text1: 'Please upload car registration front image ',
      });
    } else if (filePathCarRegBack == null) {
      Toast.show({
        type: 'error',
        text1: 'Please upload registration back image',
      });
    } else if (filePathCarImageFront == null) {
      Toast.show({
        type: 'error',
        text1: 'Please upload car front registration image',
      });
    } else if (filePathCarImageBack == null) {
      Toast.show({
        type: 'error',
        text1: 'Please upload car back registration image',
      });
    } else if (filePathCarPhotoFront == null) {
      Toast.show({
        type: 'error',
        text1: 'Please upload car doc front image',
      });
    } else if (filePathCarPhotoBack == null) {
      Toast.show({
        type: 'error',
        text1: 'Please upload car doc back image',
      });
    }
    // ------------------------------------------------------------------------------------
    else if (filePathCarSideFront == null) {
      Toast.show({
        type: 'error',
        text1: 'Please upload car front number image',
      });
    } else if (filePathCarSideBack == null) {
      Toast.show({
        type: 'error',
        text1: 'Please upload car back number image',
      });
    } else if (filePathCarSideFront == null) {
      Toast.show({
        type: 'error',
        text1: 'Please upload car front number image',
      });
    } else if (filePathCarSideBack == null) {
      Toast.show({
        type: 'error',
        text1: 'Please upload car back number image',
      });
    } else if (filePathCarPhotoFront == null) {
      Toast.show({
        type: 'error',
        text1: 'Please upload car doc front image',
      });
    } else if (filePathCarPhotoBack == null) {
      Toast.show({
        type: 'error',
        text1: 'Please upload car doc back image',
      });
    }
    // ------------------------------------------------------------------------------------
    // filePathCarPhotoFront
    else {
      let formdata = new FormData();

      formdata.append('licence_front', {
        uri: filePathDlFront.assets[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });
      formdata.append('license_back', {
        uri: filePathDlBack.assets[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });
      formdata.append('insurance_front', {
        uri: filePathInsFront.assets[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });
      formdata.append('insurance_back', {
        uri: filePathInsBack.assets[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });

      formdata.append('car_registration_front', {
        uri: filePathCarRegFront.assets[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });
      formdata.append('car_registration_back', {
        uri: filePathCarRegBack.assets[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });

      formdata.append('car_image_number_front', {
        uri: filePathCarImageFront.assets[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });
      formdata.append('car_image_number_back', {
        uri: filePathCarImageBack.assets[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });
      /////..............................
      formdata.append('photo_car_front', {
        uri: filePathCarPhotoFront.assets[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });
      formdata.append('photo_car_back', {
        uri: filePathCarPhotoBack.assets[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });
      /////..............................
      formdata.append('car_side1', {
        uri: filePathCarSideFront.assets[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });
      formdata.append('car_side2', {
        uri: filePathCarSideBack.assets[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });

      /////..............................
      formdata.append('car_interior_front', {
        uri: filePathCarInteriorFront.assets[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });
      formdata.append('car_interior_back', {
        uri: filePathCarInteriorBack.assets[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });
      formdata.append('vehicle_type', vehicle.id);

      const data = AsyncStorage.getItem('userToken');
      // const driver = JSON.parse(data);
      console.log('formdata=====>', data);
      const api = "http://kabou.us/api/driver/update-docs";

      axios({
        url: api,
        method: 'POST',
        data: formdata,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${userToken}`
        }
      })
        .then(function (response) {
          console.log("response :", response);
        })
        .catch(function (error) {
          console.log("error from image :", error);
        })

      // fetch('http://kabou.us/api/driver/update-docs', {
      //   method: 'post',
      //   headers: myHeaders,
      //   body: formdata,
      // })
      //   .then(response => {
      //     const res = JSON.stringify(response);
      //     if (res.status == 200) {
      //     } else {
      //     }
      //     console.log('image uploaded================>', response);
      //   })
      //   .catch(err => {
      //     console.log(
      //       'error block --------------------------------------------------------------------------------------------------------------------->',
      //       err,
      //     );
      //   });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
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
            // onPress={() => navigation.goBack()}
            style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IconAntDesign
              color={colors.headerText}
              size={24}
              name={'arrowleft'}
            />
            <Text style={[styles.subText, { fontWeight: 'bold', fontSize: 18 }]}>
              {'   '}Documentation
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{ flex: 1, marginTop: 60 }}
          contentContainerStyle={{ flexGrow: 1 }}>
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

                    <Text style={[styles.subText, { fontWeight: 'bold' }]}>
                      Image file to upload
                    </Text>

                    <ImagePickerModal
                      isVisible={visibleDlFront}
                      onClose={() => setVisibleDlFront(false)}
                      onImageLibraryPress={onImageLibraryPress}
                      onCameraPress={onCameraPress}
                    />

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => setVisibleDlFront(true)}>
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
                    <Text style={[styles.subText, { fontWeight: 'bold' }]}>
                      Image file to upload
                    </Text>

                    <ImagePickerModal
                      isVisible={visibleDlBack}
                      onClose={() => setVisibleDlBack(false)}
                      onImageLibraryPress={onImageLibraryPressBack}
                      onCameraPress={onCameraPressBack}
                    />

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => setVisibleDlBack(true)}>
                      <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Select File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                {
                  vehicleData && vehicleData != null ?
                    <RNPickerSelect
                      style={{
                        ...pickerSelectStyles,
                        iconContainer: {
                          top: 20,
                          right: 10,
                          color: "#fff",
                          backgroundColor: "#fff"
                        },
                        placeholder: {
                          color: "grey",
                          fontSize: 18,
                          fontWeight: 'bold',
                        },
                      }}
                      placeholderTextColor={"#fff"}
                      placeholder={{
                        label: 'Select vehicle',
                        value: null,
                        color: 'grey'
                      }}
                      value={vehicle}
                      onValueChange={(value) => setVehicle(value)}
                      items={vehicleData.vehicle}
                    />
                    :
                    null
                }
                {/* <RNPickerSelect
                  style={{
                    ...pickerSelectStyles,
                    iconContainer: {
                      top: 20,
                      right: 10,
                      color: "#fff",
                      backgroundColor: "#fff"
                    },
                    placeholder: {
                      color: "grey",
                      fontSize: 18,
                      fontWeight: 'bold',
                    },
                  }}
                  placeholderTextColor={"#fff"}
                  placeholder={{
                    label: 'Select vehicle',
                    value: null,
                    color: 'grey'
                  }}
                  value={vehicle}
                  onValueChange={(value) => setVehicle(value)}
                  // items={vehicleData.vehicle}
                /> */}


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
                    <Text style={[styles.subText, { fontWeight: 'bold' }]}>
                      Image file to upload
                    </Text>

                    <ImagePickerModal
                      isVisible={visibleInsFront}
                      onClose={() => setVisibleInsFront(false)}
                      onImageLibraryPress={onImageLibraryPressInsFront}
                      onCameraPress={onCameraPressInsFront}
                    />

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => setVisibleInsFront(true)}>
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
                    <Text style={[styles.subText, { fontWeight: 'bold' }]}>
                      Image file to upload
                    </Text>

                    <ImagePickerModal
                      isVisible={visibleInsBack}
                      onClose={() => setVisibleInsBack(false)}
                      onImageLibraryPress={onImageLibraryPressInsBack}
                      onCameraPress={onCameraPressInsBack}
                    />

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => setVisibleInsBack(true)}>
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

                    <Text style={[styles.subText, { fontWeight: 'bold' }]}>
                      Image file to upload
                    </Text>

                    <ImagePickerModal
                      isVisible={visibleCarRegFront}
                      onClose={() => setVisibleCarRegFront(false)}
                      onImageLibraryPress={onImageLibraryPressCarRegFront}
                      onCameraPress={onCameraPressCarRegFront}
                    />

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => setVisibleCarRegFront(true)}>
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
                    <Text style={[styles.subText, { fontWeight: 'bold' }]}>
                      Image file to upload
                    </Text>

                    <ImagePickerModal
                      isVisible={visibleCarRegBack}
                      onClose={() => setVisibleCarRegBack(false)}
                      onImageLibraryPress={onImageLibraryPressCarRegBack}
                      onCameraPress={onCameraPressCarRegBack}
                    />

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => setVisibleCarRegBack(true)}>
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

                    <Text style={[styles.subText, { fontWeight: 'bold' }]}>
                      Image file to upload
                    </Text>

                    <ImagePickerModal
                      isVisible={visibleCarImageFront}
                      onClose={() => setVisibleCarImageFront(false)}
                      onImageLibraryPress={onImageLibraryPressCarImageFront}
                      onCameraPress={onCameraPressCarImageFront}
                    />

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => setVisibleCarImageFront(true)}>
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
                    <Text style={[styles.subText, { fontWeight: 'bold' }]}>
                      Image file to upload
                    </Text>

                    <ImagePickerModal
                      isVisible={visibleCarImageBack}
                      onClose={() => setVisibleCarImageBack(false)}
                      onImageLibraryPress={onImageLibraryPressCarImageBack}
                      onCameraPress={onCameraPressCarImageBack}
                    />

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => setVisibleCarImageBack(true)}>
                      <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Select File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={[styles.singleItemStyle, { borderBottomWidth: 0 }]}>
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

                    <Text style={[styles.subText, { fontWeight: 'bold' }]}>
                      Image file to upload
                    </Text>

                    <ImagePickerModal
                      isVisible={visibleCarPhotoFront}
                      onClose={() => setVisibleCarPhotoFront(false)}
                      onImageLibraryPress={onImageLibraryPressCarPhotoFront}
                      onCameraPress={onCameraPressCarPhotoFront}
                    />

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => setVisibleCarPhotoFront(true)}>
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
                    <Text style={[styles.subText, { fontWeight: 'bold' }]}>
                      Image file to upload
                    </Text>

                    <ImagePickerModal
                      isVisible={visibleCarPhotoBack}
                      onClose={() => setVisibleCarPhotoBack(false)}
                      onImageLibraryPress={onImageLibraryPressCarPhotoBack}
                      onCameraPress={onCameraPressCarPhotoBack}
                    />

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => setVisibleCarPhotoBack(true)}>
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

                    <Text style={[styles.subText, { fontWeight: 'bold' }]}>
                      Image file to upload
                    </Text>

                    <ImagePickerModal
                      isVisible={visibleCarInteriorFront}
                      onClose={() => setVisibleCarInteriorFront(false)}
                      onImageLibraryPress={onImageLibraryPressCarInteriorFront}
                      onCameraPress={onCameraPressCarInteriorFront}
                    />

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => setVisibleCarInteriorFront(true)}>
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
                    <Text style={[styles.subText, { fontWeight: 'bold' }]}>
                      Image file to upload
                    </Text>

                    <ImagePickerModal
                      isVisible={visibleCarInteriorBack}
                      onClose={() => setVisibleCarInteriorBack(false)}
                      onImageLibraryPress={onImageLibraryPressCarInteriorBack}
                      onCameraPress={onCameraPressCarInteriorBack}
                    />

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => setVisibleCarInteriorBack(true)}>
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

                    <Text style={[styles.subText, { fontWeight: 'bold' }]}>
                      Image file to upload
                    </Text>

                    <ImagePickerModal
                      isVisible={visibleCarSideFront}
                      onClose={() => setVisibleCarSideFront(false)}
                      onImageLibraryPress={onImageLibraryPressCarSideFront}
                      onCameraPress={onCameraPressCarSideFront}
                    />

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => setVisibleCarSideFront(true)}>
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
                    <Text style={[styles.subText, { fontWeight: 'bold' }]}>
                      Image file to upload
                    </Text>

                    <ImagePickerModal
                      isVisible={visibleCarSideBack}
                      onClose={() => setVisibleCarSideBack(false)}
                      onImageLibraryPress={onImageLibraryPressCarSideBack}
                      onCameraPress={onCameraPressCarSideBack}
                    />

                    <TouchableOpacity
                      style={{
                        width: '100%',
                      }}
                      onPress={() => setVisibleCarSideBack(true)}>
                      <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Select File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{ width: '100%', margin: 15, paddingHorizontal: 15 }}
                //onPress={() => navigation.navigate('account')}
                onPress={handleSubmit}>
                <View style={[styles.buttonStyle, { height: buttonHeight }]}>
                  <Text style={[styles.buttonTextStyle, { fontSize: 18 }]}>
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
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: "#fff",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "#DDDDDD",
    borderRadius: 8,
    color: "#DDDDDD",
    // color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});



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
