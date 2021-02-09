import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const Button = ({
  text,
  backgroundcolor = 'white',
  textcolor = '#020202',
  onPress,
}) => {
  const [isPress, setIsPress] = React.useState(false);
  var touchProps = {
    activeOpacity: 1,
    underlayColor: 'transparent', // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
  };

  return (
    <TouchableHighlight onPress={onPress} {...touchProps}>
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
