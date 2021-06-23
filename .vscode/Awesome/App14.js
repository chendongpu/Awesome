import React from 'react';

import {
    Text,View,StyleSheet,Switch
} from 'react-native';

export default class App extends React.Component{

    constructor(){
        super();
        this.label={false:'关',true:'开'};
        this.state={
            switchValue:true
        }
    }

    toggleSwitch=(value)=>{
        this.setState({switchValue:value})
    }

    render(){
        const animatedStyle={
            width:this.animatedWidth,
            height:this.animatedHeight
        };
        return (
            <View style={styles.container}>
                <Switch
                    onValueChange={this.toggleSwitch}
                    value={this.state.switchValue}
                />
                <View>
                    <Text>
                        switch当前状态是:{this.label[this.state.switchValue]}
                    </Text>
                </View>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    },
    box:{
        backgroundColor:'blue',
        width:50,
        height:100
    }

});

