import React from 'react';

import {
    ScrollView,
    StyleSheet,
    Text,
    Dimensions,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window')
export default class HomePage extends React.Component {

    render() {
        return (

            <ScrollView>
                <Text style={{ fontSize: 30 }}>swiper</Text>
                <Swiper
                    //样式
                    style={styles.wrapper}
                    //高度
                    height={width * 40 / 75}
                    // 是否显示控制按钮（即左右两侧的箭头是否可见）
                    showsButtons={true}
                    //这个很主要啊，解决白屏问题
                    removeClippedSubviews={false}
                    // 切换时间，单位秒
                    autoplayTimeout={3}
                    // 是否自动轮播
                    autoplay={true}
                    // 如果为true，滚动方向是横向的，如果为false，滚动方向是竖向的
                    horizontal={true}
                    // 分页风格
                    paginationStyle={styles.paginationStyle}
                    // 点样式
                    dotStyle={styles.dotStyle}
                    // 活动点样式
                    activeDotStyle={styles.activeDotStyle}
                >
                    <Image resizeMode="cover" source={require('../../assets/1.jpg')} style={styles.bannerImg} />
                    <Image resizeMode="cover" source={require('../../assets/2.png')} style={styles.bannerImg} />
                    <Image resizeMode="cover" source={require('../../assets/1.jpg')} style={styles.bannerImg} />
                    <Image resizeMode="cover" source={require('../../assets/2.png')} style={styles.bannerImg} />
                </Swiper>
            </ScrollView>
        )
    }
};
const styles=StyleSheet.create({
    wrpaper: {
        width: width,
        height: width * 40 / 75
    },
    paginationStyle: {
        bottom: 6,
    },
    dotStyle: {
        backgroundColor: '#fff',
        opacity: 0.4,
    },
    activeDotStyle: {
        backgroundColor: 'cyan',
    },
    bannerImg: {
        width: width,
        height: width * 40 / 75,
    }

});


