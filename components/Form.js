import React, { useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

const Form = ({ addTodo }) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.form}>
      <View style={styles.container}>
        <Text>Enter Todo</Text>
        <TextInput
          style={styles.input}
          onChangeText={(val) => setText(val)}
          value={text}
        />
        <View style={styles.addBtn}>
          <Button
            onPress={() => addTodo(text, setText)}
            title="Add"
            color="#8739FA"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 50,
  },
  container: {
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 5,
    height: 40,
    padding: 8,
  },
  addBtn: {
    marginTop: 20,
    alignSelf: 'center',
    width: '40%',
  },
});

export default Form;
