import React from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import {SafetyHeader, TipsRidingItem} from '../../components';

const SafetyTips = ({navigation}) => {
  return (
    <View style={styles.page}>
      <SafetyHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TipsRidingItem />
        <TipsRidingItem />
        <TipsRidingItem />
        <TipsRidingItem />
        <TipsRidingItem />
        <TipsRidingItem />
        <TipsRidingItem />
        <TipsRidingItem />
        <TipsRidingItem />
      </ScrollView>
    </View>
  );
};

export default SafetyTips;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
