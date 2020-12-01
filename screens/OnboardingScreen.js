import React from 'react';
import {View, Text, Button, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {images, appTheme} from '../constants/';
const { COLORS, SIZES, FONTS } = appTheme;

const Skip = ({...props}) => {
   return (
      <TouchableOpacity
         style={{marginLeft: SIZES.padding}}
         {...props}
      >
         <Text style={{...FONTS.medium}}>Skip</Text>
      </TouchableOpacity>
   );
}

const Next = ({...props}) => {
   return (
      <TouchableOpacity
         style={{marginRight: SIZES.padding}}
         {...props}
      >
         <Text style={{...FONTS.medium}}>Next</Text>
      </TouchableOpacity>
   );
}

const Done = ({...props}) => {
   return (
      <TouchableOpacity
         style={{marginRight: SIZES.padding }}
         {...props}
      >
         <Text style={{...FONTS.medium}}>Done</Text>
      </TouchableOpacity>
   );
}

const Dots = ({selected}) => {
   const backgroundColor = selected ? 'rgba(0, 0, 0, .8)': 'rgba(0, 0, 0, .3)';

   return (
      <View style={{width: SIZES.base, height: SIZES.base, marginHorizontal: SIZES.padding, backgroundColor}}></View>
   );
}

const OnboardingScreen = ({navigation}) => {
   return (
      <Onboarding
         SkipButtonComponent={Skip}
         NextButtonComponent={Next}
         DoneButtonComponent={Done}
         Dot Component={Dots}
         onSkip={() => navigation.replace('Login')}
         onDone={() => navigation.navigate('Login')}
         pages={[
            {
               backgroundColor: COLORS.first,
               image: <Image source={images.onboarding1} resizeMode='contain' />,
               title: 'Connect to the world',
               subtitle: 'A new way to connect to the world'
            },
            {
               backgroundColor: COLORS.second,
               image: <Image source={images.onboarding2} resizeMode='contain' />,
               title: 'Share your favorites',
               subtitle: 'Know similar people to talk with!'
            },
            {
               backgroundColor: COLORS.third,
               image: <Image source={images.onboarding3} resizeMode='contain' />,
               title: 'Become the star',
               subtitle: 'Let the spotlight capture you'
            }
         ]}
      />
   )
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   }
});

export default OnboardingScreen;