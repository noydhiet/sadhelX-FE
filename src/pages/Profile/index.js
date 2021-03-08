import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput, Button, Gap} from '../../components/atoms';
import {getData, storeData} from '../../utils';
import {
  FeedItem,
  ProfileHeader,
  ProfileInfo,
  ProfileTabs,
} from '../../components';

const Profile = ({navigation}) => {
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
  //     navigation.reset({index: 0, routes: [{name: 'WelcomeAuth'}]});
  //   });
  // };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <ProfileHeader />
        <ProfileInfo />
        <ProfileTabs />
        <View>
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
  },
});
