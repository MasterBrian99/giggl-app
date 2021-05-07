import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import SinglePost from '../components/Post/SinglePost';

const Home = () => {
  return (
    <ScrollView style={styles.main}>
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#242a38',
  },
});
