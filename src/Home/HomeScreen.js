
import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';
import {positionList} from '../data';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
    
    // static navigationOptions = {
    //     headerTitle: '首页'
    // };

    static navigationOptions = (props) => {
        const {navigation} = props;
        return {
            headerTitle: '首页',
            headerRight: (
                <Button title='详情' color='white'
                    onPress={()=>{
                        navigation.navigate('Detail');
                    }}
                />
            ),
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            contentList: [],
            isLoading: true
        };
        this._loadData();
    }

    _loadData() {
        setTimeout(() => {
            this.setState({
                contentList: positionList.list,
                isLoading: false
            })
        }, 200);
    }

    render() {
        return (
            <FlatList
            style={styles.contentList}
            data={this.state.contentList}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            />
        );
    }

    _renderItem({item}) {
       const {name,salary,cname,size,username,title} = item;
       return (
        <TouchableHighlight style={styles.itemContent}
            underlayColor='#e0e0e0'
            onPress={()=>{
                Alert.alert('点击了');
            }}
        >
            <View>
                <View style={styles.pNameContent}>
                    <Text style={styles.pName}>{name}</Text>
                    <Text style={styles.pSalary}>{salary}</Text>
                </View>
                <Text style={styles.pCompany}>{`${cname} ${size}`}</Text>
                <View style={styles.pLine}/>
                <Text style={styles.pHr}>{`${username} ${title}`}</Text>
            </View>
        </TouchableHighlight>
       );
    }

    _keyExtractor = (item, index) => `default_${item.name}_${index}`;
}

const styles = StyleSheet.create({
    contentList: {
        flex: 1,
        backgroundColor: 'gray'
        // backgroundColor: 'rgb(241,242,246)'
    },
    itemContent: {
        flex: 1,
        flexDirection: 'column',
        height: 120,
        backgroundColor: 'white',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    pNameContent: {
      height: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    pName: {
      fontSize: 18
    },
    pSalary: {
      fontSize: 18,
      color: 'red'
    },
    pCompany: {
      marginTop: 10,
      height: 20,
      fontSize: 18,
      color: 'gray'
    },
    pLine: {
      backgroundColor: '#e0e0e0',
      height: StyleSheet.hairlineWidth,
      marginTop: 10,
    },
    pHr: {
      marginTop: 10,
      height: 20,
      fontSize: 18,
      color: 'rgb(29,216,200)'
    }
  
});
