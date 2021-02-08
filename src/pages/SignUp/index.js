import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput, Button, Gap} from '../../components/atoms';

const SignUp = ({navigation}) => {
  const onSubmit = () => {
    navigation.navigate('SignUpForm');
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
          <Text style={styles.titleText}>Welcome to sadhelX</Text>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleLeft}>
              We just need a few quick details to continue
            </Text>
            <Text style={styles.subtitleRight}>1/2</Text>
          </View>
          <Gap height={10} />
          <Text style={styles.labelTitle}>Profile Photo</Text>
          <TouchableOpacity style={styles.photoContainer}>
            <View></View>
          </TouchableOpacity>
          <Gap height={10} />
          <TextInput label="Name" placeholder="Enter your full name" />
          <Gap height={40} />
          <Button
            text="Next"
            backgroundcolor="#757575"
            textcolor="white"
            onPress={onSubmit}
          />
          <Gap height={200} />
          <View style={styles.signInWrapper}>
            <Text style={styles.textOuter}>Already a member?</Text>
            <Text style={styles.textInner} onPress={() => handleGoTo('SignIn')}>
              Sign In
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
