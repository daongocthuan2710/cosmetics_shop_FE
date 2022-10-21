import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./user/homeSlice";
import authReducer from "./user/authSlice";
import cateReducer from "./user/cateSlice";

    const rootReducer = {
        products: productReducer,
        auths: authReducer,
        cates: cateReducer,
    }
    const store = configureStore({
        reducer: rootReducer,
    });

    export default store;