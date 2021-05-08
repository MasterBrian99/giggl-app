import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import Home from '../screens/Home';
import ChevronBackIcon from 'react-native-vector-icons/Ionicons';
import Category from '../screens/Category';
import {StyleSheet, View} from 'react-native';
import InfoIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryIcon from 'react-native-vector-icons/MaterialIcons';
import Info from '../screens/Info';
import CategoryHome from '../screens/CategoryHome';

const Stack = createStackNavigator();

const StackRoute = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen //Home
          name="Home"
          component={Home}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: '#242a38',
              height: 60,
              shadowRadius: 0,
              shadowColor: 'transparent',
            },

            headerTitleStyle: {
              fontFamily: 'Lato-Bold',
              color: '#aaaaaa',
            },
            headerLeft: () => null,
            headerRight: props => (
              <View style={styles.iconView}>
                <CategoryIcon
                  name="category"
                  size={20}
                  color="#aaaaaa"
                  {...props}
                  onPress={() => {
                    navigation.navigate('Category');
                  }}
                />
                <InfoIcon
                  name="information-outline"
                  size={20}
                  color="#aaaaaa"
                  style={styles.infoIcon}
                  {...props}
                  onPress={() => {
                    navigation.navigate('Info');
                  }}
                />
              </View>
            ),
            title: 'Home',
          })}
        />
        <Stack.Screen //Category
          name="Category"
          component={Category}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: '#242a38',
              height: 60,
              shadowRadius: 0,
              shadowColor: 'transparent',
            },
            headerTitleStyle: {
              fontFamily: 'Lato-Bold',
              color: '#aaaaaa',
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
            headerRight: props => (
              <View style={styles.iconView}>
                <InfoIcon
                  name="information-outline"
                  size={20}
                  color="#aaaaaa"
                  style={styles.infoIcon}
                  {...props}
                  onPress={() => {
                    navigation.navigate('Info');
                  }}
                />
              </View>
            ),
            title: 'Category',
          })}
        />
        <Stack.Screen //Info
          name="Info"
          component={Info}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: '#242a38',
              height: 60,
              shadowRadius: 0,
              shadowColor: 'transparent',
            },
            headerTitleStyle: {
              fontFamily: 'Lato-Bold',
              color: '#aaaaaa',
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
            headerRight: props => (
              <View style={styles.iconView}>
                <CategoryIcon
                  name="category"
                  size={20}
                  color="#aaaaaa"
                  {...props}
                  onPress={() => {
                    navigation.navigate('Category');
                  }}
                />
              </View>
            ),
            title: 'About',
          })}
        />
        <Stack.Screen //CategoryHome
          name="CategoryHome"
          component={CategoryHome}
          options={({navigation, route}) => ({
            headerStyle: {
              backgroundColor: '#242a38',
              height: 60,
              shadowRadius: 0,
              shadowColor: 'transparent',
            },
            headerTitleStyle: {
              fontFamily: 'Lato-Bold',
              color: '#aaaaaa',
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
            headerRight: props => (
              <View style={styles.iconView}>
                <CategoryIcon
                  name="category"
                  size={20}
                  color="#aaaaaa"
                  {...props}
                  onPress={() => {
                    navigation.navigate('Category');
                  }}
                />
                <InfoIcon
                  name="information-outline"
                  size={20}
                  color="#aaaaaa"
                  style={styles.infoIcon}
                  {...props}
                  onPress={() => {
                    navigation.navigate('Info');
                  }}
                />
              </View>
            ),
            //@ts-ignore
            title: route?.params?.headerName,
          })}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackRoute;

const styles = StyleSheet.create({
  iconView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  infoIcon: {
    marginLeft: 10,
  },
});
