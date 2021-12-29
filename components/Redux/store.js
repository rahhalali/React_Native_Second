import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import GraphSlice from "./GraphSlice";
import UserSlice from "./UserSlice";
export default configureStore({
    reducer: {
        login:LoginSlice,
        graph:GraphSlice,
        user:UserSlice
    },
});