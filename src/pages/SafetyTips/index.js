import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import {SafetyHeader, TipsRidingItem} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {getSafetyTips} from '../../redux/action/safety';

const SafetyTips = ({navigation}) => {
  const dispatch = useDispatch();
  const {tips} = useSelector((state) => state.safetyReducer);
  useEffect(() => {
    dispatch(getSafetyTips());
  }, [dispatch]);
  return (
    <View style={styles.page}>
      <SafetyHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <TipsRidingItem />
        <TipsRidingItem />
        <TipsRidingItem />
        <TipsRidingItem />
        <TipsRidingItem />
        <TipsRidingItem />
        <TipsRidingItem />
        <TipsRidingItem />
        <TipsRidingItem /> */}
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
