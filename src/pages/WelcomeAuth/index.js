import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Button, Buttons, Gap} from '../../components/atoms';
import {ButtonGoogle} from '../../components/molecules';
import {DummyBanner} from '../../assets';

const WelcomeAuth = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.wrapper}>
      <ImageBackground style={styles.imageBanner} source={DummyBanner}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleBanner}>
            In this text will give information
          </Text>
          <Text style={styles.subtitleBanner}>“Quotes something in here”</Text>
        </View>
      </ImageBackground>
      <View style={styles.containerLogin}>
        <View style={{width: 280}}>
          <ButtonGoogle />
        </View>
        <Gap height={20} />
        <View style={{width: 280}}>
          <Buttons
            text="Sign in with your email"
            backgroundcolor="#0c8eff"
            backgroundcoloronpress="#0c8eff"
            textcolor="white"
            onPress={() => handleGoTo('SignIn')}
          />
        </View>
        <Gap height={20} />
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
  imageBanner: {
    width: '100%',
    height: '105%',
    flex: 1,
    position: 'relative',
    resizeMode: 'cover',
  },
  titleContainer: {
    marginHorizontal: 16,
    marginTop: 170,
    width: 235,
  },
  titleBanner: {
    fontFamily: 'SarabunExtraBold',
    fontSize: 24,
    color: '#22262f',
  },
  subtitleBanner: {
    fontFamily: 'SarabunSemiBold',
    fontSize: 16,
    color: '#757575',
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
