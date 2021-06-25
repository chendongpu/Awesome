import React from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const HomePage=()=>{
    return (
        <>
            <View style={styles.view}>
                <Text>Home Page</Text>
            </View>
        </>
    )
};
const styles=StyleSheet.create({
    view:{
        height:200,
        width:200,
        backgroundColor:"rgba(200,255,0,0.5)"
    }
})

export default HomePage;
