import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {images, appTheme} from '../constants/';
const {COLORS, SIZES, FONTS} = appTheme;

const Login = ({navigation}) => {
   return (
      <View style={styles.container}>
         <Image
            source={images.logo}
            resizeMode='contain'
            style={{width: 80, height: 80}}
         />
         <Text style={{color: COLORS.white, ...FONTS.large}}>End of onboarding</Text>
         <TouchableOpacity onPress={() => navigation.replace('OnboardingScreen')}>
            <Text style={{marginTop: SIZES.base, color: COLORS.white, ...FONTS.medium}}>Click here to start again</Text>
         </TouchableOpacity>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.black
   }
});

export default Login;