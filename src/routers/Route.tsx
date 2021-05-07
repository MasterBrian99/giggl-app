import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import Home from '../screens/Home';
import Header from '../components/Header/Header';

const Stack = createStackNavigator();
import SettingIcon from 'react-native-vector-icons/Feather';
import ChevronBackIcon from 'react-native-vector-icons/Ionicons';

const Route = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: '#242a38',
              height: 60,
            },
            headerLeft: props => (
              <ChevronBackIcon
                name="chevron-back"
                size={30}
                color="#aaaaaa"
                {...props}
                onPress={() => {
                  navigation.goBack();
                  // Do something\
                }}
              />
            ),
            headerTitle: props => <Header {...props} />,
          })}
        />
      </Stack.Navigator>
    </>
  );
};

export default Route;

// <Stack.Navigator
//   screenOptions={{
//     headerShown: false
//   }}
// ></Stack.Navigator>
