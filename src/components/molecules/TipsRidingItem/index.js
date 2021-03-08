import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

const TipsRidingItem = ({link, title}) => {
  const navigation = useNavigation();
  const source = {
    uri:
      // 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      `http://10.147.20.154:8089/guidelines/documents/${link}`,
  };
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
            paddingBottom: 10,
            width: '53%',
          }}>
          {/* <Text style={styles.desContainer}>{title}</Text> */}
          <Text style={styles.desContainer} numberOfLines={4}>
            {title}
          </Text>
          <View style={{width: '100%'}}>
            <Button
              backgroundcolor="#0c8eff"
              text="View Details"
              textcolor="white"
              onPress={() =>
                navigation.navigate('TipsPDF', {
                  source,
                })
              }
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
    height: 150,
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
    width: '44%',
    height: 125,
    backgroundColor: '#eeee',
    marginRight: 10,
    borderRadius: 8,
  },
  desContainer: {
    width: '100%',
    height: 80,
    fontFamily: 'SarabunSemiBold',
    textTransform: 'capitalize',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: 'justify',
    color: '#454749',
  },
});
