import React from 'react';

import {
    Text, View, StyleSheet, Picker, Button,
} from 'react-native';

export default class App extends React.Component{

    users=[
        {label:'请选择性别',value:''},
        {label:'男',value:'male'},
        {label:'女',value:'female'},
        {label:'其他',value:'other'},
    ];

    state={user:''};

    updateUser=(user)=>{
        this.setState({user})
    };


    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.label}>请选择</Text>
                <Picker
                    selectValue={this.state.user}
                    onValueChange={this.updateUser}
                >
                    {
                        this.users.map((o,index)=><Picker.Item label={o.label} value={o.value} />)
                    }
                </Picker>
                <Text style={styles.label}> 你选择的是:{this.state.user}</Text>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        marginTop:20,
        marginHorizontal:10
    }
});

