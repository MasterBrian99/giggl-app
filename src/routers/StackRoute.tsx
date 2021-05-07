import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import Home from '../screens/Home';
import Header from '../components/Header/Header';

const Stack = createStackNavigator();
import ChevronBackIcon from 'react-native-vector-icons/Ionicons';

const StackRoute = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: '#242a38',
              height: 60,
              shadowRadius: 0,
              shadowColor: 'transparent',
            },
            headerLeft: props => (
              <ChevronBackIcon
                name="chevron-back"
                size={30}
                color="#aaaaaa"
                {...props}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            ),
            title: 'Mahinda',
            // @ts-ignore
            headerTitle: props => <Header {...props} />,
          })}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackRoute;

// <Stack.Navigator
//   screenOptions={{
//     headerShown: false
//   }}
// ></Stack.Navigator>
