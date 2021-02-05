import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({
  text,
  backgroundcolor = 'white',
  textcolor = '#020202',
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container(backgroundcolor)}>
        <Text style={styles.text(textcolor)}>{text}</Text>
      </View>
    </TouchableOpacity>
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
    marginBottom: 21,
  }),
  text: (textcolor) => ({
    fontSize: 14,
    fontFamily: 'RobotoMedium',
    color: textcolor,
    textAlign: 'center',
  }),
});
