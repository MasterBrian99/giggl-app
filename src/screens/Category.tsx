import React from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Item from '../components/categoryItem/Item';
import {StackNavigationProp} from '@react-navigation/stack';

interface Prop {
  navigation: StackNavigationProp<any, any>;
}

const Category = ({navigation}: Prop) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Item />
      </TouchableOpacity>
      <TouchableOpacity>
        <Item />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: '#242a38',
  },
});
