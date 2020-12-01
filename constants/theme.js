import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
   black: '#000000',
   white: '#FFFFFF',
   first: '#A6E4D0',
   second: '#FDEB93',
   third: '#39BCB3'
}

export const SIZES = {
   // Globals
   base: 8,
   radius: 14,
   padding: 24,

   // Fontsizes
   bigTitle: 50,
   larger: 30,
   large: 22,
   medium: 16,
   small: 14,

   // App dimensions
   width,
   height
};

export const FONTS = {
   bigTitle: {fontFamily: 'Kufam-SemiBold-Italic', fontSize: SIZES.bigTitle, lineHeight: 40},
   larger: {fontFamily: 'Lato-Bold', fontSize: SIZES.larger, lineHeight: 36},
   large: {fontFamily: 'Lato-BoldItalic', fontSize: SIZES.large, lineHeight: 30},
   medium: {fontFamily: 'Lato-Italic', fontSize: SIZES.medium, lineHeight: 22},
   small: {fontFamily: 'Lato-Regular', fontSize: SIZES.small, lineHeight: 22}
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;