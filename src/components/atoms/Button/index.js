import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const Button = ({
  text,
  backgroundcolor = 'white',
  textcolor = '#020202',
  onPress,
}) => {
  
  return (
    <TouchableHighlight onPress={onPress} underlayColor={'none'}>
      <View style={styles.container(backgroundcolor)}>
        <Text style={styles.text(textcolor)}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (backgroundcolor) => ({
    backgroundColor: backgroundcolor,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#80979797',
    justifyContent: 'center',
    height: 57,
  }),
  text: (textcolor) => ({
    fontSize: 14,
    fontFamily: 'RobotoMedium',
    color: textcolor,
    textAlign: 'center',
  }),
});
