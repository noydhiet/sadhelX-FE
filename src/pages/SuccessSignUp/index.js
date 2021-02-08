import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Gap} from '../../components/atoms';

const SucessSignUp = ({navigation}) => {
  const onSubmit = () => {
    navigation.navigate('SignIn');
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
          <Text style={styles.titleText}>Create Account Success</Text>
          <Gap height={20} />
          <View
            style={{
              width: 250,
              height: 200,
              backgroundColor: '#0c8eff',
            }}></View>
          <Gap height={15} />
          <Text style={styles.desctext}>Now you can sign in to sadhelX</Text>
          <Gap height={30} />
          <Button
            backgroundcolor="#0c8eff"
            textcolor="#ffff"
            text="Sign In"
            onPress={onSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SucessSignUp;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
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
    paddingHorizontal: 50,
    flex: 1,
  },
  iconBack: {
    width: 24,
    height: 24,
    backgroundColor: '#747474',
  },
  titleText: {
    // paddingHorizontal: 25,
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'SarabunExtraBold',
  },
  desctext: {
    textAlign: 'center',
    color: '#6e6e6e',
    fontSize: 14,
  },
});
