import React, { useState } from 'react';
import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';

function App(props) {
  const [todos, setTodos] = useState([
    { text: 'e.g. Go to Shopping', key: '1' },
  ]);

  const deleteTodo = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  const addTodo = (text, setText) => {
    setText('');
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos,
      ];
    });
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Form addTodo={addTodo} />
        <List todos={todos} deleteTodo={deleteTodo} />
        <Text style={styles.mutedText}>
          {todos.length === 0
            ? 'Add a new Todo'
            : 'Tap on completed tasks to remove them'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'flex-start',
  },
  content: {
    width: '100%',
  },
  mutedText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#a7afb5',
  },
});

export default App;
