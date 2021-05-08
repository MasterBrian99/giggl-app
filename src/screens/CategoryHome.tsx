import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import TwoPartPost from '../components/post/TwoPartPost';
import SinglePost from '../components/post/SinglePost';

const CategoryHome = () => {
  return (
    <ScrollView style={styles.main}>
      <TwoPartPost />
      <SinglePost />
    </ScrollView>
  );
};

export default CategoryHome;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#242a38',
  },
});
