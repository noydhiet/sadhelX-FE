import React from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import {SafetyHeader} from '../../components';

const SafetySertifikasi = () => {
  return (
    <View style={styles.page}>
      <SafetyHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>Ini halaman Safety Sertifikasi</Text>
      </ScrollView>
    </View>
  );
};

export default SafetySertifikasi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
