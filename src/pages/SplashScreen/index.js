import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../components';
import {getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('tokenRefresh').then((res) => {
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('WelcomeAuth');
        }
      });
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Sadhel X</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#020202',
  },
});
