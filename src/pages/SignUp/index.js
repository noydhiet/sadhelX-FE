import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput, Button, Gap} from '../../components/atoms';

const SignUp = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.iconBack}
        onPress={() => handleGoTo('WelcomeAuth')}></TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.titleText}>Welcome to sadhelX</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleLeft}>
            We just need a few quick details to continue
          </Text>
          <Text style={styles.subtitleRight}>1/2</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.labelTitle}>Profile Photo</Text>
          <TouchableOpacity style={styles.photoContainer}>
            <View></View>
          </TouchableOpacity>
        </View>
        <TextInput label="Name" placeholder="Enter your full name" />
        <Gap height={30} />
        <Button text="Next" backgroundcolor="#757575" textcolor="white" />
        <Gap height={80} />
        <View style={styles.signupWrapper}>
          <Text style={styles.textOuter}>Already a member?</Text>
          <Text style={styles.textInner} onPress={() => handleGoTo('SignIn')}>
            Sign In
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  container: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  iconBack: {
    width: 24,
    height: 24,
    backgroundColor: '#747474',
  },
  titleText: {
    fontSize: 26,
    fontFamily: 'SarabunExtraBold',
  },
  subtitleContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  subtitleLeft: {
    fontFamily: 'SarabunRegular',
    width: 200,
    color: '#6e6e6e',
  },
  subtitleRight: {
    fontFamily: 'SarabunMedium',
    fontSize: 16,
    // backgroundColor: 'red',
    alignItems: 'center',
    width: 25,
    height: 25,
  },
  photoContainer: {
    height: 80,
    width: 80,
    backgroundColor: '#6e6e6e',
    borderRadius: 20,
    marginVertical: 10,
  },
  labelTitle: {
    fontFamily: 'RobotoRegular',
    fontSize: 12,
    color: '#22262f',
  },
  signupWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
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
