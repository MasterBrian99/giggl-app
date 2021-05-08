import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRoute from './routers/StackRoute';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StackRoute />
      </NavigationContainer>
    </>
  );
};

export default App;
