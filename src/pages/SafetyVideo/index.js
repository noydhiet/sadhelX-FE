import React from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import {SafetyHeader} from '../../components';

const SafetyVideo = () => {
  return (
    <View style={styles.page}>
      <SafetyHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>Ini halaman Video</Text>
      </ScrollView>
    </View>
  );
};

export default SafetyVideo;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
