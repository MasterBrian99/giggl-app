import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// interface Prop {
//   onPress: () => void;
// }

const Item = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryName}>Programming</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4e596f',
    marginHorizontal: 10,
    marginVertical: 4,
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
  },
  categoryName: {
    paddingVertical: 5,
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    color: '#fff',
  },
});
