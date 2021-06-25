import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomePage from '../home/homePage'
import CatePage from '../cate/catePage'
import MinePage from '../mine/minePage'
const BottomNavigator = createBottomTabNavigator({
    Home:{
        screen:HomePage,
        navigationOptions:{
            title:'首页',
            tabBarLabel:'首页'
        }
    },
    Cate:{
        screen:CatePage,
        navigationOptions:{
            title:'分类',
            tabBarLabel:'分类'
        }
    },
    Mine:{
        screen:MinePage,
        navigationOptions:{
            title:'我的',
            tabBarLabel:'我的'
        }
    }
});
export default  BottomNavigator;
