import {Dimensions, PermissionsAndroid, Platform} from 'react-native';
const {height, width} = Dimensions.get('window');

export const FONT_FAMILY = {
  REGULAR: 'Poppins-Regular',
  LIGHT: 'Poppins-Light',
  MEDIUM: 'Poppins-Medium',
  THIN: 'Poppins-Thin',
  BOLD: 'Poppins-Bold',
};

export const FONT_SIZE = {
  MICRO: 12,
  SMALL: 14,
  MEDIUM: 16,
  LARGE: 18,
  BIG: 20,
};

export const HEIGHT = {
  FULL_SCREEN: height,
  HALF_SCREEN: height / 2,
  ONE_FOURTH_SCREEN: height / 4,
  ONE_SIX_SCREEN: height / 6,
};

export const COLORS = {
  PRIMARY: '#3165CC',
  SECENDARY: '#F3C901',
  TARTIARY: '#FFAC0E',
  WHITE: '#FFF',
  Common: '#0060A6',
  GRAY: '#727272',
  BLACK: '#000',
  GRAY_LIGHT: '#B4B4B4',
  DANGER: '#CE0F1E',
  STATUS_BAR_COLOR: '#1D8AFF',
  TEXT_COLOR_BLACK: '#3B4045',
  TEXT_COLOR_GRAY: '#737373',
  TEXT_COLOR_GRAY_FADE: '#8D949C',
  ICON_COLOR_GRAY: '#414141',
  TEXT_GRAY: '#646464',
  BACKGROUND_GRAY:''
};

export const STYLES = {
  LIGHT_TEXT: {
    fontFamily: FONT_FAMILY.OXYGEN_LIGHT,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.BLACK,
  },
  NORMAL_TEXT: {
    fontFamily: FONT_FAMILY.OXYGEN_NORMAL,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.BLACK,
  },
  BOLD_TEXT: {
    fontFamily: FONT_FAMILY.OXYGEN_BOLD,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.BLACK,
  },
};

export const SCREEN = {
  HEIGHT: height,
  WIDTH: width,
};

export const WINDOW = {
  HEIGHT: height,
  WIDTH: width,
};

export const PADDING = {
  SMALL: 5,
  MEDIUM: 10,
  LARGE: 15,
};

export const base_url = 'https://nodeserver.mydevfactory.com:1444';
export const base_url_img = 'https://nodeserver.mydevfactory.com:1444';

export const APP_TYPE = Platform.OS === 'ios' ? 'IOS' : 'ANDROID';

export const defaultImg =
  'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png';
export const noImageAvil = 'https://img.icons8.com/plasticine/2x/no-image.png';
