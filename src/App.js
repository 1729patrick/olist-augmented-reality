import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor="#eaeaea"
        barStyle="dark-content"
        translucent
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.image} source={require('./assets/car.jpg')} />
          <Text style={styles.title}>Tesla</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={require('./assets/tv.jpg')} />
          <Text style={styles.title}>TV</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    backgroundColor: '#eaeaea',
    flexDirection: 'row',
    padding: 10,
    flex: 1,
    marginTop: 25,
    elevation: 10,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 6,
    marginVertical: 5,
    padding: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 6,
  },
  title: {
    paddingVertical: 10,
    paddingLeft: 5,
  },
});

export default App;
