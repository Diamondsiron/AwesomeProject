import CompanyScreen from './CompanyScreen';
import CompanyDetail from './CompanyDetail';
import {createStackNavigator} from 'react-navigation-stack';

const CompanyNav = createStackNavigator(
    {
      CompanyScreen: {
        screen: CompanyScreen,
      },
      Detail: {
          screen: CompanyDetail,
          navigationOptions: {
              
          }
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
        },
        // mode: 'modal'   //跳转方式
    }
);

CompanyNav.navigationOptions = ({navigation}) => {

    let tabBarVisible = true;

    if(navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

export default CompanyNav;




