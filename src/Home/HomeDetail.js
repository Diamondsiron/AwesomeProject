
import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class HomeDetail extends Component {

    static navigationOptions = {
        headerTitle: '详情'
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                <Text>详情</Text>
            </View>
        );
    }

}