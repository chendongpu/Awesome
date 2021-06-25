import React from 'react';

import {
    Text, View, StyleSheet, Picker, Image
} from 'react-native';

export default class App extends React.Component{

    REQUEST_URL="https://api.github.com/users/KevinHock";



    constructor(props){
        super(props);
        this.state={
            user:null,
        };
        this.fetchData=this.fetchData.bind(this);
    }

    componentDidMount(){
        this.fetchData();
    }
    fetchData(){
        fetch(this.REQUEST_URL)
            .then((response)=>response.json())
            .then((responseData)=>{
                this.setState({
                    user:responseData
                })
            })
    }

    render(){
        if(!this.state.user){
            return this.renderLoadingView();
        }
        var user=this.state.user;
        return this.renderUser(user);
    }

    renderLoadingView=()=>{
        return(
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        )
    }

    renderUser=(user)=>{
        return (
            <View style={styles.container}>
                <Image
                    style={styles.avatar}
                    source={{uri:user.avatar_url}}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.login}>{user.login}</Text>
                    <Text style={styles.location}>{user.location}</Text>
                </View>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F8FCFF'
    },
    avatar:{
        width:100,
        height:80
    },
    rightContainer:{
        flex:1
    },
    login:{
        fontSize:20,
        marginBottom:8,
        textAlign: 'center'
    },
    location:{
        textAlign: 'center'
    }


});

