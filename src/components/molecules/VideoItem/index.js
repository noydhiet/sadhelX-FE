import React from 'react';
import {View, Text} from 'react-native';
import {Gap} from '../../atoms';
import {TouchableOpacity} from 'react-native-gesture-handler';

const VideoItem = () => {
  return (
    <View
      style={{
        height: 200,
        width: '49%',
        borderRadius: 5.6,
        backgroundColor: '#ffffff',
        // backgroundColor: 'yellow',
        borderStyle: 'solid',
        borderWidth: 0.7,
        borderColor: '#dfe1e5',
        marginBottom: 10,
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#000',
          height: 100,
          width: '100%',
          borderTopLeftRadius: 5.6,
          borderTopRightRadius: 5.6,
        }}></TouchableOpacity>
      <View style={{paddingHorizontal: 7, paddingVertical: 10}}>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontSize: 8.4,
            fontWeight: 'normal',
            fontStyle: 'normal',
            lineHeight: 11.2,
            letterSpacing: 0.21,
            color: '#807fa1',
          }}>
          Source
        </Text>
        <Gap height={5} />
        <Text
          style={{
            fontFamily: 'Roboto',
            fontSize: 9.8,
            fontWeight: '500',
            fontStyle: 'normal',
            lineHeight: 14,
            letterSpacing: 0.21,
            color: '#1d1c45',
          }}
          numberOfLines={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </View>
    </View>
  );
};

export default VideoItem;
