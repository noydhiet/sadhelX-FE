import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const WelcomeAuth = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.banner}></View>
      <View style={styles.containerLogin}>
        <View>
          <TouchableOpacity style={styles.buttonWrapper('white')}>
            <Text style={styles.text('#747474')}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonWrapper('#0c8eff')}
            onPress={() => handleGoTo('SignIn')}>
            <Text style={styles.text('white')}>Sign in with your email</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupWrapper}>
          <Text style={styles.textOuter}>Not a member?</Text>
          <Text style={styles.textInner} onPress={() => handleGoTo('SignUp')}>
            Create Account.
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
  buttonWrapper: (backgroundcolor) => {
    return {
      backgroundColor: backgroundcolor,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#80979797',
      paddingVertical: 15,
      width: 280,
      height: 57,
      marginBottom: 21,
      //   fontFamily: 'Roboto',
    };
  },
  text: (fontcolor) => {
    return {
      color: fontcolor,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    };
  },
  signupWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    fontSize: 14,
  },
  textOuter: {
    fontWeight: 'bold',
    color: '#22262f',
  },
  textInner: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#0c8eff',
  },
});
