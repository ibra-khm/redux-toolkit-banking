import { configureStore } from "@reduxjs/toolkit";
import users from '../reducers/Users'
const store = configureStore({
    reducer:{
        users

    }
})
export default store;