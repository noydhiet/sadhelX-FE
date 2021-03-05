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
    // console.log({tips});
  }, [dispatch]);
  return (
    <View style={styles.page}>
      <SafetyHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        {tips.map((data) => {
          // console.log(data);
          return (
            <TipsRidingItem
              key={data.id}
              title={data.guidelines_name}
              link={data.guidelines_link}
            />
          );
        })}
        {/* {tips.map((data) => {
            console.log(data);
            return (
              <Text>Halo</Text>
              // <TipsRidingItem
              //   key={itemTips.id}
              //   title={itemTips.guidelines_name}
              // />
            );
          })} */}
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
