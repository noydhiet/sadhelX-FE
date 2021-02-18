import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Gap} from '../../components/atoms';
import {BackIcon} from '../../assets';
import {showMessage, useForm} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {checkTokenAction} from '../../redux/action';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const CheckEmailForgot = ({navigation}) => {
  const [code, setCode] = useState('');
  // console.log(code);
  const dispatch = useDispatch();

  const {forgotReducer} = useSelector((state) => state);

  const onSubmit = () => {
    dispatch({type: 'SET_IDENTITY_CODE', value: code});

    const data = {
      ...forgotReducer,
    };

    // console.log(data);
    dispatch(checkTokenAction(data, navigation));
  };

  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleGoTo('ForgotPassword')}>
          <Image source={BackIcon} style={styles.iconBack} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Check your email</Text>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>We have sent a OTP Code to</Text>
              <Text style={styles.subtitleEmail}>{forgotReducer.identity}</Text>
            </View>
          </View>
          <Gap height={20} />
          <View style={styles.verifyContainer}>
            <SmoothPinCodeInput
              maskDelay={1000}
              // password={true}
              codeLength={4}
              cellStyleFocused={styles.cellFocused}
              cellStyle={styles.numberInput}
              value={code}
              onTextChange={(pin) => {
                setCode(pin);
              }}
            />
          </View>
          <Gap height={20} />
          <Text style={styles.subtitle}>
            Did not receive the email? Check your spam filter, or{' '}
            <Text style={styles.subtitleEmail}> send another request</Text>
          </Text>
          <Gap height={40} />
          <Gap height={40} />
          <Button
            text="Verify Email"
            backgroundcolor="#0c8eff"
            textcolor="white"
            onPress={onSubmit}
          />
          <Gap height={200} />
          <View style={styles.helpWrapper}>
            <Text
              style={styles.textInner}
              onPress={() => handleGoTo('WelcomeAuth')}>
              Need more help?
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckEmailForgot;

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
    width: 20,
    height: 20,
  },
  titleText: {
    fontSize: 25,
    fontFamily: 'SarabunExtraBold',
  },
  title: {
    paddingHorizontal: 55,
  },
  subtitleContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  subtitle: {
    fontFamily: 'SarabunRegular',
    fontSize: 15,
    textAlign: 'center',
    color: '#6e6e6e',
  },
  subtitleEmail: {
    marginTop: -8,
    fontFamily: 'SarabunRegular',
    fontSize: 15,
    textAlign: 'center',
    color: '#0c8eff',
  },
  verifyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  numberInput: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: '#80979797',
    borderRadius: 20,
    padding: 20,
    marginRight: 15,
  },
  helpWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    fontSize: 14,
  },
  textInner: {
    fontFamily: 'SarabunMedium',
    marginLeft: 5,
    color: '#0c8eff',
  },
  cellFocused: {
    borderColor: '#0c8eff',
    borderWidth: 2,
  },
});
