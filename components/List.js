import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TodoItem from './TodoItem';

const List = ({ todos, deleteTodo }) => {
  return (
    <ScrollView>
      <View style={styles.list}>
        <View style={styles.container}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} deleteTodo={deleteTodo} />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  list: {
    marginTop: 40,
  },
});

export default List;
