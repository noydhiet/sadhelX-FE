import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput, Button, Gap} from '../../components/atoms';
import {getData, storeData} from '../../utils';

const Main = ({navigation}) => {
  const [userProfile, setUserProfile] = useState({});
  const updateUserProfile = () => {
    getData('userProfile').then((res) => {
      setUserProfile(res);
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
        {/* <Text>Your email {userProfile.email}</Text>
        <Text>Your username {userProfile.username}</Text> */}
        <Text>Hello Main</Text>
      </View>
      <Gap height={50} />
      <Button text="Signout" onPress={signOut} />
    </ScrollView>
  );
};

export default Main;
