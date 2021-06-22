import React from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

class SiteComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={text:props.text}
    }


    updateState=()=>{
        const text=this.state.text==='陈东谱是好人'?"陈东谱是坏人":"陈东谱是好人";
        this.setState({text});
    };

    render(){
        const {text}=this.state;
        return (
            <View style={styles.container}>
                <Text onPress={this.updateState}>{text}</Text>
            </View>
        )
    }
}

export default class App extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <SiteComponent text={"陈东谱是好人"} />
            </View>
        )
    }
}



const styles=StyleSheet.create({
    container:{
        margin:10
    }
});
