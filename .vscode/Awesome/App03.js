import React from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const App=()=>{
    return (
        <>
            <View style={styles.container}>
                <View style={[styles.txt,{color:'#336'}]}>
                    <Text>为人民服务</Text>
                </View>
                <View style={styles.card}></View>

                <View style={{marginTop:10,marginBottom:10,height:100,backgroundColor:'blue'}}></View>

                <View style={[styles.card,{backgroundColor:'pink'}]}></View>
            </View>
        </>
    )
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor: '#eee'
    },
    card:{
        height:100,
        backgroundColor: '#fff'
    },
})

export default App;
