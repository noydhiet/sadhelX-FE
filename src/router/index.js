import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  WelcomeAuth,
  SignUp,
  SignUpForm,
  CheckEmailToken,
  SuccessSignUp,
  SignIn,
  ForgotPassword,
  Main,
} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeAuth">
      <Stack.Screen
        name="WelcomeAuth"
        component={WelcomeAuth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpForm"
        component={SignUpForm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckEmailToken"
        component={CheckEmailToken}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessSignUp"
        component={SuccessSignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
