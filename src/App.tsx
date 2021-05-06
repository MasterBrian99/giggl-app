import React from 'react';
import {View, StatusBar} from 'react-native';
import MainScreen from './screens/MainScreen';
const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#242a38"
        translucent={true}
      />
      <MainScreen />
    </>
  );
};

export default App;
