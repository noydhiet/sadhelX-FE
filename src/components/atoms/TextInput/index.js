import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput as TextInputRN,
  Image,
} from 'react-native';

const TextInput = ({label, placeholder, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TextInputRN
          style={styles.input}
          placeholder={placeholder}
          {...restProps}
        />
      </View>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#80979797',
    borderRadius: 20,
    paddingLeft: 15,
  },
  input: {
    flex: 1,
    color: '#22262f',
  },
});
