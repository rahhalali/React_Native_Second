import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GetUserAsync = createAsyncThunk(
    "user/GetUserAsync",
    async (payload) => {
        const response = await fetch(`http://192.168.10.112:8000/api/user/get/users/filter`, {
            method: "GET",
            headers:{
                'Content-Type':'application/json',
            }
        });
        const result = await response.json();
        console.log('result',result.data);
        return { result: result.data };
    }
);
const UserSlice = createSlice({
    name: "user",
    initialState: {
        users:''
    },
    extraReducers: {
        [GetUserAsync.fulfilled]: (state, action) => {
            state.users=action.payload.result;
        },
    }
});

export default UserSlice.reducer;
