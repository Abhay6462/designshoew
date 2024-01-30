import { configureStore } from "@reduxjs/toolkit";
import  USerSlice  from "./store/slices/USerSlice";

const store = configureStore({
    reducer:{
        user: USerSlice,

    },
});
export default store;