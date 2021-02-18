import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput, Button, Gap} from '../../components/atoms';
import {getData, storeData} from '../../utils';

const Main = ({navigation}) => {
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    navigation.addListener('focus', () => {
      getUserProfile();
    });
  }, [navigation]);

  const getUserProfile = () => {
    getData('userProfile').then((res) => {
      setUserProfile(res);
      console.log(res);
    });
  };
  const signOut = () => {
    AsyncStorage.multiRemove([
      'userProfile',
      'tokenAccess',
      'tokenRefresh',
    ]).then(() => {
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    });
  };
  return (
    <ScrollView>
      <View>
        <Text>Your email {userProfile.email}</Text>
        <Text>Your username {userProfile.username}</Text>
        <Image source={{uri: userProfile.profile_photo_url}} />
      </View>
      <Gap height={50} />
      <Button text="Signout" onPress={signOut} />
    </ScrollView>
  );
};

export default Main;
