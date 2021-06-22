import React from 'react';

import {
    Image,
    ScrollView
} from 'react-native';

export default class App extends React.Component{
    render(){
        return (
            <ScrollView>
                <Image
                    style={{margin:10,width:200,height:200,resizeMode:'contain',borderWidth:1,borderColor:'#000'}}
                    source={require('./assets/2.png')} />

                <Image
                    style={{margin:10,width:200,height:200,resizeMode:'cover',borderWidth:1,borderColor:'#000'}}
                    source={require('./assets/2.png')} />

                <Image
                    style={{margin:10,width:200,height:200,resizeMode:'stretch',borderWidth:1,borderColor:'#000'}}
                    source={require('./assets/2.png')} />
            </ScrollView>
        )
    }
}


