import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

import { login } from "../../redux/auth/auth.actions";

import AnimatedLoader from 'react-native-animated-loader';
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Button, VStack, Flex, Input } from "native-base";
import { logo, icon, color } from "../../const";

const Login = (props) => {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    const isLoading = props.login.isLoading;
    const isAuthenticated = props.login.isAuthenticated;
    const user = props.login.user;

    const handleLogin = async () => {
        props.signin(username, password);
    }

    useEffect(()=>{
        if(isAuthenticated) {
            if(user.id == 1) props.navigation.navigate('Admin');
            else props.navigation.navigate('User');
        }
    },[isLoading]);

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <FontAwesome5 name="hand-holding-usd" size={logo.size} color={color.darkblue}/>
                <Text style={styles.title}>Pautang</Text>
            </View>
            <VStack space={5} w="100%" maxW="300px" alignItems="center">
                <Flex direction="row">
                    <FontAwesome name="user" color={color.darkblue} style={styles.icon} />
                    <Input size="lg" placeholder="username" w="90%" value={username} onChangeText={user => setUsername(user)}/>
                </Flex>
                <Flex direction="row">
                    <FontAwesome name="lock" color={color.darkblue} style={styles.icon}/> 
                    <Input size="lg" type="password" placeholder="password" w="90%" value={password} onChangeText={pass => setPassword(pass)}/>
                </Flex>
                <Flex direction="row" alignSelf="flex-end">
                    <Button
                    bgColor="info.900"
                    onPress={handleLogin}
                    w="90%"
                    >Login
                    </Button>
                </Flex>
            </VStack>

            {isLoading && 
                <AnimatedLoader
                    visible={isLoading}
                    overlayColor="rgba(255,255,255,0.75)"
                    animationStyle={styles.lottie}
                    speed={1}>
                </AnimatedLoader>
            }
        </SafeAreaView>
    );
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        signin: (username, password) => dispatch(login(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    logoContainer: {
        marginBottom: 25
    },
    title: {
        fontSize: 20,
        color: color.darkblue
    },
    inputSection: {
        flexDirection: "row",
        margin: 10,
    },
    input: {
        borderColor: color.light,
        borderWidth: 2,
        height: 50,
        width: "80%",
        padding: 15,
        borderRadius: 3
    },
    icon: {
        fontSize: icon.small,
        padding: 10
    },
    loader: {
        width: 100,
        height: 100,
    },
});