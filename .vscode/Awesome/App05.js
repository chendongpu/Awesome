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
                <Text style={styles.text}>
                    <Text>
                        陈
                    </Text>
                    <Text>
                        东谱
                    </Text>
                    <Text>
                        <Text style={styles.worldBold}>为人民</Text>服务
                    </Text>
                    <Text style={styles.italicText}>
                        为人民服务
                    </Text>

                    <Text style={styles.textShadow}>
                        Hello,world!
                    </Text>
                </Text>
            </View>
        </>
    )
};
const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        marginTop:100,
        padding:20
    },
    text:{
        color:'#cd41f4'
    },
    capitalletter:{
        color:'red',
        fontSize:20
    },
    worldBold:{
        fontWeight: 'bold',
        color:'black'
    },
    italicText:{
        color:'#37859b',
        fontStyle:'italic'
    },
    textShadow:{
        textShadowColor:'red',
        textShadowOffset:{width:2,height:2},
        textShadowRadius:1
    }

})

export default App;
