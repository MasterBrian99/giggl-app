import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const Info = () => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <Text>Info Page</Text>
      </View>
    </ScrollView>
  );
};

export default Info;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#242a38',
  },
  container: {
    marginVertical: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
