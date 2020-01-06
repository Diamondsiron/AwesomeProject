import MessageScreen from './MessageScreen';
import {createStackNavigator} from 'react-navigation-stack';

const Message = createStackNavigator(
    {
      Home: {
        screen: MessageScreen,
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

export default Message;


