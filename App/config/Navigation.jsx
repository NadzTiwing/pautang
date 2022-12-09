import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import Home from "../screens/Home";

const MainStack = createStackNavigator();
const MainStackScreen = () => {
    <MainStack.Navigator>
        <MainStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
        />
    </MainStack.Navigator>
}

export default () => {
    <NavigationContainer>
        <MainStackScreen/>
    </NavigationContainer>
}