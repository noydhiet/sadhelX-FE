import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput, Button, Gap} from '../../components/atoms';
import {getData, storeData} from '../../utils';

const Profile = ({navigation}) => {
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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <Gap height={30} />
        <View style={styles.wrapperProfile}>
          <Image
            style={styles.photo}
            source={{
              uri: userProfile.profile_photo_url,
            }}
          />
          <View style={{flex: 1}}>
            <Text style={styles.text}>
              Username Anda : {userProfile.username}{' '}
            </Text>
            <Gap height={20} />
            <Text t style={styles.text}>
              Alamat Email Anda : {userProfile.email}
            </Text>
          </View>
        </View>
        <Gap height={30} />
        {/* <View style={{width: 200, justifyContent: 'flex-end'}}> */}
        <Button
          text="Logout"
          backgroundcolor="#0c8eff"
          textcolor="white"
          onPress={signOut}
        />
        {/* </View> */}
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
  wrapperProfile: {
    flexDirection: 'row',
  },
  photo: {
    height: 100,
    width: 100,
    backgroundColor: '#0c8eff',
    marginRight: 20,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: 'SarabunSemiBold',
    color: '#6e6e6e',
  },
});
