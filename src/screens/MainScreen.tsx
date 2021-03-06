import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

interface Prop {
  navigation: StackNavigationProp<any, any>;
}

const MainScreen = ({navigation}: Prop) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/logo.png')} style={styles.logo} />
      <View style={styles.mainView}>
        <Text style={styles.header}>Giggl</Text>
        <Text style={styles.info}>
          Enjoy the best cute, cheesy and corny jokes to actually make your
          friends and family laugh
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontFamily: 'SourceSansPro-Bold',
    color: 'white',
  },
  info: {
    marginTop: 20,
    fontSize: 17,
    fontFamily: 'Lato-Regular',
    color: '#d1d0d0',
  },
  container: {
    flex: 1,
    backgroundColor: '#242a38',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoView: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {height: 140, width: 200, marginTop: 120},
  mainView: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f55263',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#4e596f',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.73,
    shadowRadius: 2.62,

    elevation: 4,
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'SourceSansPro-Bold',
  },
});
