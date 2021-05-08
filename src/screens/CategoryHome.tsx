import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, ScrollView, RefreshControl} from 'react-native';
import TwoPartPost from '../components/post/TwoPartPost';
import {generateRandomName, generateRandomLike} from '../data/Data';

interface Prop {
  category: string;
  setup: string;
  delivery: string;
}

//@ts-ignore
const CategoryHome = ({route}) => {
  const url = `https://v2.jokeapi.dev/joke/${route.params.reqHeader}?type=twopart&amount=10`;
  const [jokes, setJokes] = useState<Prop[]>([]!);
  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
    wait(1400).then(() => setRefreshing(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = () => {
    fetch(url)
      .then(response => response.json())
      .then(json => setJokes(json.jokes));
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollView
      style={styles.main}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#f55263', '#000']}
        />
      }>
      {jokes.map((el, i: number) => (
        <TwoPartPost
          likes={generateRandomLike()}
          color={'#aaaaaa'}
          name={generateRandomName()}
          key={i}
          category={el.category}
          setup={el.setup}
          delivery={el.delivery}
        />
      ))}
    </ScrollView>
  );
};

export default CategoryHome;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#242a38',
  },
});
