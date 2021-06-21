import React from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const App=()=>{
    return (
        <>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <View style={{width:50,height:50,backgroundColor:'powderblue'}}></View>
                <View style={{width:50,height:50,backgroundColor:'skyblue'}}></View>
                <View style={{width:50,height:50,backgroundColor:'steelblue'}}></View>
            </View>
        </>
    )
};

export default App;
