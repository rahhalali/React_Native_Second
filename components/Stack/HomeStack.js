import React, {useEffect} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../Login/Login";
const Stack = createStackNavigator();
const Draw = createDrawerNavigator();
import {useDispatch,useSelector} from "react-redux";

import {Logout} from "../Logout/Logout";
import {StyleSheet, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Graph from "../Graph/Graph";
import Users from "../Users/Users";

const HomeStack = () => {
    const login =useSelector(state=>state.login.logged_in);
      useEffect(()=>{
        console.log('login',login);
      },[login]);
    const Home = () => (
        <Draw.Navigator initialRouteName="List">
            <Draw.Screen name="List" component={Users} />
            <Draw.Screen name="Graph" component={Graph} />
            <Draw.Screen name="Logout" component={Logout} />
        </Draw.Navigator>
    );
    return (
        <>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                {
                    login ? ( <Stack.Screen
                        name="Home"
                        component={Home}
                        options={({ title: "HomeStack" }, { headerShown: false })}
                    />) : ( <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    />)
                }

            </Stack.Navigator>
        </NavigationContainer>
</>
    );
};
export default HomeStack;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#DCDCDC",
    }
});