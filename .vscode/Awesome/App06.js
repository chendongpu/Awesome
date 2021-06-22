import React from 'react';

import {
    Text,
    View
} from 'react-native';

export default class App extends React.Component{
    state ={
        name:'陈东谱',
        type:'牛'
    };

    updateState=()=>{
        const type=this.state.type==='牛'?"帅":"牛";
        this.setState({type});
    };

    render(){
        const {name,type}=this.state;
        return (
            <View>
                <Text onPress={this.updateState}>name:{name}</Text>
                <Text>状态:{type}</Text>
            </View>
        )
    }
};
