import React from 'react';

import {
    Text,
    View,
} from 'react-native';

const App=()=>{
    return (
        <>
            <View >
                <Text>陈东谱</Text>
            </View>

            <View style={{marginTop:10,padding:10,width:200,backgroundColor:'red'}}>
                <Text>陈东谱</Text>
            </View>

            <View style={{marginTop:10,padding:10,width:200,backgroundColor:'green'}}>
                <Text style={{color:'white'}}>陈东谱</Text>
            </View>
        </>
    )
};

export default App;
