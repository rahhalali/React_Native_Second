import React, {Fragment, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {GetUserAsync} from "../Redux/UserSlice";

function Users(props) {

    const dispatch =useDispatch();
    const Users = useSelector(state=>state.user.users);

    useEffect(()=>{
        dispatch(GetUserAsync());
    },[dispatch])
    console.log('USERS',Users);
    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
            >
                <View style={styles.tasksWrapper}>
                    <Text style={styles.sectionTitle}>List User</Text>
                      <View style={styles.items} >
                    {
                        Users && Users.map((item) => {
                                return (
                                    <View style={styles.item}>
                                        <View style={styles.itemLeft}>
                                            <View style={styles.square}></View>
                                            <Text style={styles.itemText}>{item.name} * {item.email}</Text>
                                        </View>
                                        <View style={styles.circular}></View>
                                    </View>
                                )
                            }
                        )
                    }
                    </View>
                </View>

            </ScrollView>
        </View>
    );}
export default Users;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff8886',
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30,
    },
    item: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
        maxWidth:"100%"
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#ce2029',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
    },
})