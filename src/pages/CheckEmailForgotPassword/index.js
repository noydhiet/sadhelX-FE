import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Buttons, Gap} from '../../components/atoms';
import {SuccessIllustration, BackIcon} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {CloseIcon} from '../../assets';

const CheckEmailForgotPassword = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleGoTo('WelcomeAuth')}>
          <Image source={BackIcon} style={styles.iconBack} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.titleText}>Check your email</Text>
          <Gap height={20} />
          <SuccessIllustration style={styles.illustrationSuccess} />
          <Gap height={15} />
          <View style={styles.descWrapper}>
            <Text style={styles.textOuter}>
              We have sent a password recover instruction to email
            </Text>
            <Text
              style={styles.textInner}
              onPress={() => handleGoTo('WelcomeAuth')}>
              irvan.sutroyudo@gmail.com
            </Text>
          </View>
          <Gap height={30} />
          <Buttons
            backgroundcolor="#0c8eff"
            textcolor="#ffff"
            text="Open email"
            onPress={() => handleGoTo('CreateNewPassword')}
          />
        </View>
        <Gap height={40} />
        <View style={styles.helpWrapper}>
          <Text style={styles.textOuter}>
            Did not receive the email? Check your spam filter,
          </Text>
          <Text
            style={styles.textInner}
            onPress={() => handleGoTo('WelcomeAuth')}>
            <Text style={styles.textOuter}>or </Text>try another email address
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckEmailForgotPassword;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 40,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  main: {
    paddingVertical: 10,
    flex: 1,
    paddingHorizontal: 50,
  },
  iconBack: {
    width: 20,
    height: 20,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'SarabunExtraBold',
  },
  descWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 14,
  },
  helpWrapper: {
    justifyContent: 'center',
    fontSize: 14,
    paddingHorizontal: 20,
  },
  textOuter: {
    textAlign: 'center',
    color: '#22262f',
    fontFamily: 'SarabunMedium',
  },
  textInner: {
    textAlign: 'center',
    fontFamily: 'SarabunMedium',
    color: '#0c8eff',
    marginTop: -5,
  },
  illustrationSuccess: {
    width: 250,
    height: 200,
  },
});
