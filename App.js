import React from 'react';
import {images, appTheme} from './constants/';
const {SIZES, FONTS} = appTheme;
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

const theme = {
   ...DefaultTheme,
   colors: {
      ...DefaultTheme.colors,
      border: 'transparent'
   }
}

const Stack = createStackNavigator();

// Screens
import {OnboardingScreen, Login} from './screens/';

const App = () => {
   return (
      <NavigationContainer theme={theme}>
         <Stack.Navigator
            initialRouteName={'OnboardingScreen'}
            screenOptions={{
               headerShown: false
            }}
         >
            <Stack.Screen name='OnboardingScreen' component={OnboardingScreen} />
            <Stack.Screen name='Login' component={Login} />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default () => {
   return <App />;
}