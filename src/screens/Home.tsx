import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import SinglePost from '../components/post/SinglePost';
import TwoPartPost from '../components/post/TwoPartPost';

const Home = () => {
  return (
    <ScrollView style={styles.main}>
      <SinglePost />
      <TwoPartPost />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#242a38',
  },
});
