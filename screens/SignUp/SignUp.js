import React, { useState } from 'react';
import {
    Alert,
    Button,
    Image,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// import styles from '../../components/Home/style';
const logo = require('../../assets/images/logo.png');
const facebook = require('../../assets/images/facebook.png');
const linkedin = require('../../assets/images/linkedin.png');

export default function SignUp() {
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');
    const { fullName, setFullName } = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.loginText}>
                    New Account
                </Text>
            </View>
            <View style={styles.inputView}>
                {/* Full Name */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        style={styles.textBox}
                        placeholder="Full Name"
                        placeholderTextColor="#888"
                        value={email}
                        onChangeText={(text) => setFullName(text)}
                        keyboardType="name-phone-pad"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.textBox}
                        placeholder="Enter Password"
                        placeholderTextColor="#888"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true} // Hides the password
                    />
                </View>
                {/* Email Input */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.textBox}
                        placeholder="Enter Email"
                        placeholderTextColor="#888"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                {/* Mobile No. */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Mobile No.</Text>
                    <TextInput
                        style={styles.textBox}
                        placeholder="Mobile No."
                        placeholderTextColor="#888"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType="numeric"
                        autoCapitalize="none"
                    />
                </View>

                {/* Date of barth */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Date of Birth</Text>
                    <TextInput
                        style={styles.textBox}
                        placeholder="Data of Birth"
                        placeholderTextColor="#888"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType="numbers-and-punctuation"
                        autoCapitalize="none"
                    />
                </View>

                
                <View style={styles.privaryContainer}>
                    <Text style={styles.priCon}>
                        By continuing, you agree to 
                        <Text style={styles.privaryPolicy}> Terms of Use</Text> and <Text style={styles.privaryPolicy}>Privacy Policy.</Text></Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.loginButton]}
                        onPress={() => console.log('Login Pressed!')}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.accountContainer}>
                    <Text style={styles.accountSignup}>
                        Already Have An Account?<Text style={styles.privaryPolicy}> Log In</Text>
                    </Text>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#F5CB58",
    },
    inputView: {
        backgroundColor: '#fff',
        flex: 1, // Take up available space
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
        justifyContent: 'space-between', // Distribute space between children
        width: '100%'
    },
    accountContainer: {
        alignItems: "center",
        paddingTop: 10
    },
    footerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#E95322',
        marginBottom: -30,
        marginLeft: -40,
        marginRight: -40,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        height: 55,
    },
    buttonContainer: {
        display: 'flex',
        alignItems: "center",
        width: "100%",
        paddingTop: 5
    },
    button: {
        width: 207,
        marginHorizontal: 5,
        borderRadius: 50,       // Rounded corners
        overflow: 'hidden',
        marginBottom: 8,
        paddingVertical: 10,
        paddingHorizontal: 10,
        textAlign: 'center',
        justifyContent: 'center',
    },
    loginButton: {
        backgroundColor: '#E95322',
        color: '#fff'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',

    },
    topContainer: {
        display: 'flex',
        justifyContent: 'center', // For vertical centering (not needed for horizontal centering here)
        alignItems: 'center',     // Centers items horizontally
        height: 150,              // Ensure the container has some height
        width: '100%',
    },
    accountSignup: {
        fontStyle: "normal",
        fontSize: 12,
        display: "flex",
        justifyContent: "flex-end",
        color: "#252525",
    },
    privaryContainer: {
        fontStyle: "normal",
        fontSize: 10,
        color: "#252525",
        display: "flex",
        alignItems: "center",
        justifyContent:'center',
        margin:'auto',
        textAlign:'center',
        width:"70%"
    },
    header: {
        fontFamily: 'League Spartan',
        fontStyle: "normal",
        fontSize: 24,
        lineHeight: 22,
        display: "flex",
        alignItems: "center",
        textTransform: "capitalize",
        color: "#391713"
    },
    subHeader: {
        fontFamily: 'League Spartan',
        fontStyle: "normal",
        fontSize: 14,
        lineHeight: 14,
        color: "#252525",
        marginTop: 25,
        marginBottom: 20
    },
    loginText: {
        fontFamily: 'League Spartan',
        fontStyle: "normal",
        fontSize: 28,
        lineHeight: 26,
        color: "#F8F8F8"
    },
    welcomeText: {
        fontFamily: 'League Spartan',
        fontStyle: "normal",
        fontSize: 24,
        lineHeight: 22,
        display: "flex",
        alignItems: "center,",
        textTransform: "capitalize",
        color: "#391713"
    },
    inputGroup: {
        width: '100%', // Adjust to match your layout
        marginBottom: 15, // Spacing between input fields
        borderRadius: 50
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5, // Space between label and TextInput
        color: '#333', // Customize the color
    },
    textBox: {
        borderWidth: 0,
        padding: 10,
        borderRadius: 20,
        width: '100%',
        color: '#391713',
        backgroundColor: '#F3E9B5', // Light background color for the input
    },
    privaryPolicy: {
        color: '#E95322',
        fontSize: 12
    },
    priCon:{
        fontSize: 12
    }
});