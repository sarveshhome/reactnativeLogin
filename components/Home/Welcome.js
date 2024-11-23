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
const Logo = require('../../assets/images/LogoNew.png');
const Bg = require('../../assets/images/bg2.png');
const Sketch = require('../../assets/images/sketch.png');
export default function Welcome() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo}>
                <Image source={Logo} style={styles.image} />
            </View>
            <View style={styles.paraContainer}>
                <Text style={styles.title}>Are You Looking for Portrait at Reasonable Price.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.loginButton]}
                    onPress={() => console.log('Login Pressed!')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.signupButton]}
                    onPress={() => console.log('Login Pressed!')}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        padding: 20,
        backgroundColor: '#E95322',
    },

    button: {
        width: 220,
        marginHorizontal: 5,
        borderRadius: 50,       // Rounded corners
        overflow: 'hidden',
        marginBottom: 8,
        paddingVertical: 10,
        paddingHorizontal: 10,
        textAlign: 'center',
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        justifyContent: 'center',
        // Shadow for Android
        elevation: 8,
    },
    paraContainer:{
        paddingBottom:38
    },
    loginButton: {
        backgroundColor: '#F5CB58',
        color: '#E95322'
    },
    signupButton: {
        backgroundColor: '#fff',
        color: "#E95322"
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        color:'#E95322'
    },
    title:{
        color: '#FFFFFF',
        width:300,
        textAlign:'center',
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