import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'

import {useDispatch,useSelector} from "react-redux";


import {LoginAsync} from "../Redux/LoginSlice";


const Login = ({ navigation }) => {
  const dispatch=useDispatch();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const submitForm = () => {
    const body = new FormData();
    dispatch(LoginAsync({email:email,password:password}))
  };

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
            style={styles.image}
            source={require('../Images/Hnet.com-image.png')}
        />
        <Text style={styles.title}>Welcome !!</Text>
                <TextInput
                    placeholder='Email'
                    style={styles.input}
                    onChangeText={(e) => setEmail(e)}
                />

        <TextInput
            placeholder='Password'
            style={styles.input}
            onChangeText={(e) => setPassword(e)}
        />

        <TouchableOpacity
            onPress={submitForm}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 36,
    marginBottom: 30,
    marginTop: 16,
    color: 'red'
  },
  error: {
    fontSize: 16,
    color: 'red',
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 36,
    marginRight: 36
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  image: {
    maxWidth: "90%",
    alignItems:"center",
    borderWidth: 1,
    borderRadius:10,
    padding:10
  },
  button: {
    fontSize: 20,
    color: 'white',
    width: 120,
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: '#c01c00',
    padding: 8,
    textAlign: 'center'
  }
})

export default Login;
