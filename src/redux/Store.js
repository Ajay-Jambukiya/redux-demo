import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
    reducer:{
        user:userSlice.reducer  //user -> we can write any random name 
        
    }
})

export default store