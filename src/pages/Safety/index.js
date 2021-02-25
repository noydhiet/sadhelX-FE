import React from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {TipsRidingItem} from '../../components';

const Safety = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.textHeader}>Safety</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.iconHeader}></View>
            <View style={styles.iconHeader}></View>
          </View>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <TouchableHighlight
            style={{
              width: 84,
              height: 24,
              borderRadius: 3,
              backgroundColor: '#0c8eff',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Text style={{color: 'white'}}>Tips Riding</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              width: 84,
              height: 24,
              borderRadius: 3,
              backgroundColor: '#f0f2f5',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Text>Video Riding</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              width: 84,
              height: 24,
              borderRadius: 3,
              backgroundColor: '#f0f2f5',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Text>e-Sertifikasi</Text>
          </TouchableHighlight>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
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

export default Safety;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: 'white',
    height: 80,
    elevation: 5,
  },
  mainContent: {
    flex: 1,
    backgroundColor: 'yellow',
    // paddingTop: 300,
  },
  iconHeader: {
    width: 30,
    height: 30,
    marginRight: 5,
    backgroundColor: '#eeee',
    borderWidth: 1,
    borderColor: '#0c8eff',
  },
  textHeader: {
    height: 16,
    fontFamily: 'Sarabun',
    fontSize: 15.4,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 15.4,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#313233',
  },
});
