import * as React from "react";
import {StyleSheet, View} from "react-native";
import HomeStack from "./components/Stack/HomeStack";
import {Provider} from "react-redux";
import store from "./components/Redux/store";

export default function App() {
    return (
        <Provider store={store}>
                <HomeStack />
        </Provider>
    );
}
// `http://192.168.10.112:8000/api/user/get/users/filter?firstname=${searchPhrase}`
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
