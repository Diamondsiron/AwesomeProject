
import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import HomeScreen from './HomeScreen';
import {createStackNavigator} from 'react-navigation-stack';
import HomeDetail from './HomeDetail';
const HomeNavigator = createStackNavigator(
    {
      Home: {
        screen: HomeScreen
      },
      Detail: {
          screen: HomeDetail
      }
    },
    {
        defaultNavigationOptions: {
            headerTitleStyle: {
                color: 'white',
            },
            headerStyle: {
                backgroundColor: 'rgb(29,216,200)'
            }
        }
    }
);

HomeNavigator.navigationOptions = ({navigation}) => {

    let tabBarVisible = true;
    if(navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible
    };
}

export default HomeNavigator;