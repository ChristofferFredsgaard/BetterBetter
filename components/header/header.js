import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './header_styles'

const image = { uri: "https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80" };

const Header = () => {

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerSubtitle}>YOU'RE BECOMING A</Text>
            <Text style={styles.headerTitle}>BetterBetter</Text>
            <Image source={image} style={styles.profileContainer}></Image>
        </View>
    )
}

export default Header;