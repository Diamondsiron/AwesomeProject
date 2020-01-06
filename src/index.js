import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import CompanyNav from './Company';
import Message from './Message';
import My from './My';
import Icon from 'react-native-vector-icons/FontAwesome';
import WelcomePage from './Welcome'

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions:{
        title: '职位'
        // tabBarLabel: '职位',
      }
    },
    Company: {
      screen: CompanyNav,
      navigationOptions:{
        tabBarLabel: '公司'
      }
    },
    Message: {
      screen: Message,
      navigationOptions:{
        tabBarLabel: '消息'
      }
    },
    My: {
      screen: My,
      navigationOptions:{
        tabBarLabel: '我的'
      }
    }
  },
  {
    // initialRouteName: 'Company',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'globe';
        } else if (routeName === 'Company') {
          iconName = 'building-o';
        } else if (routeName === 'Message') {
          iconName = 'comments-o';
        } else if (routeName === 'My') {
          iconName = 'user-circle-o';
        }
        return <Icon name={iconName} size={20} color={tintColor} />;
      },
    }),
    tabBarOptions: {
        // showLabel: false, //是否显示标题问题
        activeTintColor: 'rgb(29,216,200)',
        inactiveTintColor: 'gray'
    }
  }
)

// const AppInitNavigator = createStackNavigator({
//     welcome: {
//         screen: WelcomePage,
//         navigationOptions: {
//             header: null
//         }
//     }
// });

const switchNavigator = createSwitchNavigator({
    Init: WelcomePage,
    Main: TabNavigator
});

// const AppContainer = createAppContainer(TabNavigator);
const AppContainer = createAppContainer(switchNavigator);

export default AppContainer;