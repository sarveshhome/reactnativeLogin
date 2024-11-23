import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    SafeAreaView,
    Button,
    TouchableOpacity,
    ImageBackground,
    StyleSheet
} from 'react-native';
const Banner = require('../../assets/images/bhim-rao-ambedkar-01.png');
const DesignBg = require('../../assets/images/Lines-PNG-Clipart.png');
const Desi = require('../../assets/images/Abstract-Lines-PNG-Pic.png');
const ClipArt = require('../../assets/images/Abstract-PNG-Clipart.png');
const Logo = require('../../assets/images/LogoNew1.png');
const Bg = require('../../assets/images/bg2.png');
const Sketch = require('../../assets/images/sketch.png');
export default function FirstPage() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo}>
                <Image source={Logo} style={styles.image} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5CB58',
      },
      logo: {
        alignItems: 'center',
      },
      image: {
        width: 250, // Adjust the width to your desired size
        height: 200, // Adjust the height to your desired size
        resizeMode: 'contain', // Keeps the aspect ratio of the image
      },
});