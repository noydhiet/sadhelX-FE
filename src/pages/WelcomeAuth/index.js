import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components/atoms';

const WelcomeAuth = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.banner}></View>
      <View style={styles.containerLogin}>
        <View style={{width: 280}}>
          <Button text="Sign in with Google" />
        </View>
        <View style={{width: 280}}>
          <Button
            text="Sign in with your email"
            backgroundcolor="#0c8eff"
            textcolor="white"
            onPress={() => handleGoTo('SignIn')}
          />
        </View>
        <View style={styles.signupWrapper}>
          <Text style={styles.textOuter}>Not a member?</Text>
          <Text style={styles.textInner} onPress={() => handleGoTo('SignUp')}>
            Create account.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WelcomeAuth;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#b3e1e7',
  },
  banner: {
    flex: 1,
  },
  containerLogin: {
    backgroundColor: 'white',
    height: 300,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  signupWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    fontSize: 14,
  },
  textOuter: {
    color: '#22262f',
    fontFamily: 'SarabunMedium',
  },
  textInner: {
    fontFamily: 'SarabunMedium',
    marginLeft: 5,
    color: '#0c8eff',
  },
});
