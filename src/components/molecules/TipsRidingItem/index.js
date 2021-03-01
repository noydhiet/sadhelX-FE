import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Buttons} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

const TipsRidingItem = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
        }}>
        <View style={styles.imageContainer}></View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text style={styles.desContainer}>
            6 Safety points, for children while out riding their bikes.
          </Text>
          <View style={{width: '50%'}}>
            <Buttons
              backgroundcolor="#0c8eff"
              text="View Details"
              textcolor="white"
              onPress={() => navigation.navigate('TipsPDF')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TipsRidingItem;

const styles = StyleSheet.create({
  card: {
    height: 180,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    flexDirection: 'row',
    width: '95%',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  imageContainer: {
    width: 148,
    height: 148,
    backgroundColor: '#eeee',
    marginRight: 10,
    borderRadius: 8,
  },
  desContainer: {
    width: '50%',
    height: 51,
    fontFamily: 'Sarabun',
    fontSize: 13.4,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0.5,
    lineHeight: 20,
    textAlign: 'justify',
    color: '#454749',
  },
});
