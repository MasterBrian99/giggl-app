import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header/Header';

const Home = () => {
  return (
    <ScrollView style={styles.main}>
      <Text>Hello</Text>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'green',
  },
});
