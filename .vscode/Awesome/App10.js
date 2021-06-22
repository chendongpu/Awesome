import React from 'react';

import {
    ActivityIndicator,View,Text,TouchableOpacity,StyleSheet,Button
} from 'react-native';

export default class App extends React.Component{

    state={
        animating:true,
    };
    closeActivityIndicator=()=>{
        this.setState({animating: !this.state.animating});
    };
    componentDidMount=()=>this.closeActivityIndicator();
    render(){
        const {animating}=this.state;
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={animating}
                    color='#bc2b78'
                    size="large"
                    style={styles.activityIndicator}
                />
                <Button onPress={this.closeActivityIndicator} title={"切换显示loading"} />
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:70
    },
    activityIndicator:{
        height:80
    }

});

