import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image, Linking} from 'react-native';
import SocialGithubIcon from 'react-native-vector-icons/SimpleLineIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Info = () => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <Image source={require('../assets/img/logo.png')} style={styles.logo} />
        <Text style={styles.info}>Social Media for Jokes</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            'https://github.com/MasterBrian99/giggl-app',
          ).catch(err => console.error('Error', err))
        }>
        <View style={styles.source}>
          <SocialGithubIcon size={30} color="#fff" name="social-github" />
          <Text style={styles.sourceText}> Source Code</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Info;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#242a38',
  },
  container: {
    marginTop: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'Lato-Bold',
  },
  info: {
    fontSize: 25,
    color: '#fff',
    fontFamily: 'SourceSansPro-Bold',
  },
  logo: {height: 140, width: 200},

  source: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  sourceText: {
    color: '#fff',
    marginTop: 3,
    fontFamily: 'SourceSansPro-Bold',
  },
});
