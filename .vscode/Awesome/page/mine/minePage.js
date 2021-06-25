import React from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const MinePage=()=>{
    return (
        <>
            <View style={styles.view}>
                <Text>Mine Page</Text>
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
});

export default MinePage;
