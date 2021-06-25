import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import BottomNavigator from './page/root/rootPage'
const AppStack=createStackNavigator(
    {
        BottomNavigation:{
            screen:BottomNavigator,
            navigationOption:{
                headerShow:false
            }
        }
    },{
        mode:'modal',
        headerMode:'none'
    }
);
export default createAppContainer(AppStack);
