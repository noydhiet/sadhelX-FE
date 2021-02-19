import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput, Button, Gap} from '../../components/atoms';
import {getData, storeData} from '../../utils';

const Profile = () => {
     // const [userProfile, setUserProfile] = useState({});
  // useEffect(() => {
  //   navigation.addListener('focus', () => {
  //     getUserProfile();
  //   });
  // }, [navigation]);

  // const getUserProfile = () => {
  //   getData('userProfile').then((res) => {
  //     setUserProfile(res);
  //     console.log(res);
  //   });
  // };
  // const signOut = () => {
  //   AsyncStorage.multiRemove([
  //     'userProfile',
  //     'tokenAccess',
  //     'tokenRefresh',
  //   ]).then(() => {
  //     navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
  //   });
  // };
  return (
    <View>
      <Text>Ini Halaman Profile</Text>
    </View>
  );
};

export default Profile;
