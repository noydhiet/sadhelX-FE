import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';

const TextInput = ({label, placeholder, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        style={styles.input}
        placeholder={placeholder}
        {...restProps}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontFamily: 'RobotoRegular',
    color: '#22262f',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#757575',
    borderRadius: 20,
    padding: 10,
  },
});
