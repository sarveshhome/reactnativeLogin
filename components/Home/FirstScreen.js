import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import styles from './style';
const Banner = require('../../assets/images/bhim-rao-ambedkar-01.png');
const DesignBg = require('../../assets/images/Lines-PNG-Clipart.png');
const Desi = require('../../assets/images/Abstract-Lines-PNG-Pic.png');
const ClipArt = require('../../assets/images/Abstract-PNG-Clipart.png');
const Logo = require('../../assets/images/logo.png');
const Bg = require('../../assets/images/bg2.png');
const Sketch = require('../../assets/images/sketch.png');
export default function FirstScreen() {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    <Text style={styles.titleRK}>RK</Text>
                    <Text style={styles.titleFineArts}> Fine Arts</Text>
                </Text>
            </View>
        </View>
    );
}
