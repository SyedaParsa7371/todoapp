
// src/screens/Signup/Signup.js

import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../../assets/Colors";
import { useState, useEffect } from "react";
import fonts from "../../assets";
import { Pressable, TouchableOpacity } from "react-native-gesture-handler";


function Signup({ navigation }) {
    const [enteredUserName, setEnteredUserName] = useState('Parsa');
    const [enteredEmail, setEnteredEmail] = useState('parsa@gmail.com');
    const [enteredPassword, setEnteredPassword] = useState('asasaaa');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    function Ontoggle() {
        setShowPassword(!showPassword)
    }

    function validateForm() {
        const errors = {};
        if (!enteredUserName) {
            errors.enteredUserName = '*Please Enter Your User Name*';
        }
        if (!enteredEmail) {
            errors.enteredEmail = '*Please Enter Your Email*';
        } else if (!/\S+@\S+\.\S+/.test(enteredEmail)) {
            errors.enteredEmail = 'Email is invalid.';
        }
        if (!enteredPassword) {
            errors.enteredPassword = '*Please Enter Your Password*';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    function handleSignUp() {
        if (validateForm()) {
            console.log('submitted', enteredUserName, enteredEmail, enteredPassword);
            setEnteredUserName("");
            setEnteredEmail("");
            setEnteredPassword("");
            navigation.navigate('HomeScreen', { enteredUserName, enteredEmail });
        }
    }
    console.log('Test', showPassword)
    return (

        <ScrollView>
            <View style={styles.roots}>
                <View style={styles.inputContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require('../../assets/images/sign.png')} />
                    </View>
                    <View>
                        <Text style={styles.textField}>Enter Your Name*</Text>
                        <View style={styles.inputFields}>
                            <TextInput
                                style={styles.inputText}
                                placeholder="Name"
                                placeholderTextColor={Colors.textColor}
                                value={enteredUserName}
                                onChangeText={setEnteredUserName}
                            />
                            {errors.enteredUserName && <Text style={styles.error}>{errors.enteredUserName}</Text>}
                        </View>
                    </View>
                    <View>
                        <Text style={styles.textField}>Enter Your Email*</Text>
                        <View style={styles.inputFields}>
                            <TextInput
                                style={styles.inputText}
                                placeholder="Email"
                                placeholderTextColor={Colors.textColor}
                                value={enteredEmail}
                                onChangeText={setEnteredEmail}
                            />
                            {errors.enteredEmail && <Text style={styles.error}>{errors.enteredEmail}</Text>}
                        </View>
                    </View>
                    <View >
                        <Text style={styles.textField}>Enter Your Password*</Text>
                        <View style={styles.inputFields}>
                            <TextInput
                                style={styles.inputText}
                                placeholder="Password"
                                placeholderTextColor={Colors.textColor}
                                value={enteredPassword}
                                onChangeText={setEnteredPassword}
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={Ontoggle} >
                                <Image style={styles.images} source={showPassword ? require('../../assets/images/cutEye.png') : require('../../assets/images/eyeOpen.png')} />
                            </TouchableOpacity>
                            {errors.enteredPassword && <Text style={styles.error}>{errors.enteredPassword}</Text>}


                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.addButton} onPress={handleSignUp}>
                            <    Text style={styles.textButton}>Add Task</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    roots: {
        backgroundColor: Colors.backgroundSignup,
    },
    imageContainer: {
        marginLeft: 100,
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    inputContainer: {
        marginTop: 50,
    },
    images: {
        marginTop: 17,
        height: 20,
        width: 20,
    },
    inputField: {
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.inputColor,
        color: Colors.textColor,

        flexDirection: 'row',
        justifyContent: "space-between"
    },
    inputText: {
        fontFamily: fonts.ubuntuItalic,
        fontSize: 17,
    },
    inputFields: {
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 5,
        fontSize: 17,
        borderColor: Colors.inputColor,
        color: Colors.textColor,
        fontFamily: fonts.ubuntuItalic,
        flexDirection: 'row',
        justifyContent: "space-between"
    },


    addButton: {
        backgroundColor: Colors.buttonColors,
        padding: 10,
        margin: 10,
        width: 250,
        borderRadius: 5,
        alignItems: 'center',
    },
    textButton: {
        color: Colors.textHome,
        fontSize: 17,
        fontFamily: fonts.ubuntuBoldItalic
    },
    password: {
        flexDirection: 'row'
    },
    textField: {
        marginLeft: 10,
        color: Colors.textColor,
        fontSize: 17,
        fontFamily: fonts.ubuntuItalic
    },
    buttonContainer: {
        margin: 10,
        marginBottom: 200,
        marginLeft: 60,
        width: 150,
    },
    error: {
        color: Colors.errorColor,
        marginLeft: 10
    }
});

export default Signup;
