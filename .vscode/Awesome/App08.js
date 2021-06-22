import React from 'react';

import {
    Image,
    ScrollView
} from 'react-native';

export default class App extends React.Component{
    render(){
        return (
            <ScrollView>
               <Image source={require('./assets/1.jpg')} />
                <Image source={require('./assets/2.png')} style={{margin:10,width:192,height:108}} />
            </ScrollView>
        )
    }
}


