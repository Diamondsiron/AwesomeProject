
import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class CompanyDetail extends Component {

    static navigationOptions = {
        headerTitle: '公司详情'
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                <Text>CompanyDetail</Text>
            </View>
        );
    }

}