import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput, Button, Gap} from '../../components/atoms';

const SignIn = ({navigation}) => {
  const onSubmit = () => {
    navigation.navigate('Main');
  };
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconBack}
          onPress={() => navigation.goBack()}></TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Sign in to sadhelX</Text>
            <Text style={styles.subtitleText}>Enter your detail below</Text>
          </View>
          <Gap height={30} />
          <TextInput
            label="User Name or Email"
            placeholder="Enter your full name"
          />
          <Gap height={0} />
          <View>
            <TouchableOpacity
              style={{
                height: 20,
                bottom: -20,
                zIndex: 2,
                position: 'relative',
              }}
              onPress={() => handleGoTo('ForgotPassword')}>
              <Text
                style={{
                  fontFamily: 'RobotoRegular',
                  fontSize: 12,
                  color: '#0c8eff',
                  position: 'absolute',
                  right: 0,
                  bottom: 5,
                }}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>
          <TextInput
            label="Password"
            placeholder="Password at least 8 characters"
          />
          <Gap height={30} />
          <Button
            text="Sign In"
            backgroundcolor="#757575"
            textcolor="white"
            onPress={onSubmit}
          />
          <Gap height={20} />
          <View
            style={{
              height: 1,
              backgroundColor: '#757575',
              position: 'relative',
            }}>
            <Text
              style={{
                position: 'absolute',
                left: '45%',
                bottom: -10,
                backgroundColor: 'white',
                textAlign: 'center',
                height: 25,
                width: 25,
                fontSize: 16,
                fontFamily: 'SarabunMedium',
              }}>
              OR
            </Text>
          </View>
          <Gap height={40} />
          <Button text="Sign in with Google" />
          <Gap height={50} />
          <View style={styles.signInWrapper}>
            <Text style={styles.textOuter}>Not a member?</Text>
            <Text style={styles.textInner} onPress={() => handleGoTo('SignUp')}>
              Create account
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
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
    paddingHorizontal: 25,
    flex: 1,
  },
  iconBack: {
    width: 24,
    height: 24,
    backgroundColor: '#747474',
  },
  titleContainer: {
    paddingHorizontal: 30,
  },
  titleText: {
    fontSize: 26,
    fontFamily: 'SarabunExtraBold',
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 14,
    fontFamily: 'SarabunRegular',
    color: '#6e6e6e',
    textAlign: 'center',
  },
  signInWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    // position: 'absolute',
    // bottom: 80,
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
