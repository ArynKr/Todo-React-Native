import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.column}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://img.icons8.com/metro/26/ffffff/menu.png',
            }}
          />
          <Text style={styles.title}>My Todos</Text>
        </View>

        <Image
          style={styles.image}
          source={{
            uri: 'https://img.icons8.com/ios-filled/50/ffffff/guest-male.png',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    backgroundColor: '#8739FA',
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    height: '100%',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  image: {
    width: 25,
    height: 25,
  },
});
