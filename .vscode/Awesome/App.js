import React from 'react';
import SplashScreen from 'react-native-splash-screen';

import Navigator from './navigator'

import {
    View,
} from 'react-native';

export default class App extends React.Component {
    componentDidMount() {
        // 在入口文件处隐藏掉启动页
        SplashScreen.hide(); // 关闭启动屏幕
    }
    render() {
        return (<View style={{flex:1}}>
            <Navigator />
        </View>)
    }
}





