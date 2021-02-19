import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput, Button, Gap} from '../../components/atoms';
import {getData, storeData} from '../../utils';

const Feed = () => {
  return (
    <ScrollView>
      <Text>Hallo ini halaman feed</Text>
    </ScrollView>
  );
};

export default Feed;
