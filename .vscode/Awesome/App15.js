import React from 'react';

import {
    Text, View, StyleSheet, StatusBar, Button,
} from 'react-native';

export default class App extends React.Component{

    state={
        hidden:false,
        barStyle:'default'
    };

    changeHidden=()=>{
        let hidden=this.state.hidden?false:true;
        this.setState({hidden})
    };

    changeBarStyle=()=>{
        let barStyle=this.state.barStyle==='light-content'?'dark-content':'light-content';
        this.setState({barStyle});
    };

    render(){
        return (
            <View>
                <StatusBar barStyle={this.state.barStyle} hidden={this.state.hidden}/>
                <View style={styles.buttonView}><Button  onPress={this.changeHidden} title={"显示或隐藏"} /></View>

                <View style={styles.buttonView}><Button  onPress={this.changeBarStyle} title={"改变颜色"} /></View>

            </View>
        )
    }
}


const styles=StyleSheet.create({
    buttonView:{
        margin: 10,
        height: 40
    }


});

