import React from 'react';

import {
    Alert,Text,View,TextInput,Button,StyleSheet,TouchableHighlight
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

export default class App extends React.Component{

    state={
        'name':'陈东谱',
        'inputText':'为人民服务'
    };

    async readName(){
        try{
            const value=await AsyncStorage.getItem('name');
            console.log("value:",value);
            if(value !== null){
                this.setState({'name':value});
            }
            Alert.alert('读取数据成功');
        }catch (e) {
            console.log(e);
            Alert.alert('读取数据失败');
        }
    }

    setName=()=>{
        AsyncStorage.setItem("name",this.state.inputText);
        console.log("inputText:",this.state.inputText);
        Alert.alert("保存成功");
    };

    render(){
        return (<View style={styles.container}>
            <TextInput
                style={styles.textInput}
                autoCapitalize={'none'}
                value={this.state.inputText} />


            <View style={styles.buttonView}><Button  onPress={this.setName} title={"保存"} /></View>

            <View style={styles.buttonView}><Button  onPress={this.readName.bind(this)} title={"读取"} /></View>

            <View style={{marginTop:8}}>
                <Text>当前的值:{this.state.name}</Text>
            </View>
        </View>)
    }
}


const styles=StyleSheet.create({
    container:{
        marginTop:20,
        marginHorizontal:10
    },
    textInput:{
        margin: 10,
        height: 40,
        width:'100%',
        borderWidth:1,
        borderColor:'#ddd'
    },
    buttonView:{
        margin: 10,
        height: 40
    }
});

