import React from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Item from '../components/categoryItem/Item';
import {StackNavigationProp} from '@react-navigation/stack';
import {categoryItem} from '../data/Data';
interface Prop {
  navigation: StackNavigationProp<any, any>;
}

const Category = ({navigation}: Prop) => {
  return (
    <ScrollView style={styles.container}>
      {categoryItem.map((el, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => {
            navigation.navigate('CategoryHome', {
              headerName: el,
              reqHeader: el,
            });
          }}>
          <Item name={el} />
        </TouchableOpacity>
      ))}
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
