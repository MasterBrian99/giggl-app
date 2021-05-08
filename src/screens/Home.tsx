import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, RefreshControl} from 'react-native';
import TwoPartPost from '../components/post/TwoPartPost';
import {generateRandomName, generateRandomLike} from '../data/Data';

interface Prop {
  category: string;
  setup: string;
  delivery: string;
}

const Home = () => {
  const url = 'https://v2.jokeapi.dev/joke/Any?type=twopart&amount=10';
  const [jokes, setJokes] = useState<Prop[]>([]!);
  const [refreshing, setRefreshing] = React.useState(false);
  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData();
    wait(1400).then(() => setRefreshing(false));
  }, []);

  const getData = () => {
    fetch(url)
      .then(response => response.json())
      .then(json => setJokes(json.jokes));
  };
  useEffect(() => {
    getData();
    return () => {
      setJokes([]);
    };
  }, []);

  const getRandom = () => {
    let name = generateRandomName();
    return name;
  };

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
      {jokes.map((el, i) => (
        <TwoPartPost
          color={'#aaaaaa'}
          key={i}
          category={el.category}
          setup={el.setup}
          delivery={el.delivery}
          name={getRandom()}
          likes={generateRandomLike()}
        />
      ))}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#242a38',
  },
});
