import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import SinglePost from '../components/Post/SinglePost';
import TwoPartPost from '../components/Post/TwoPartPost';

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
