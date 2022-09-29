import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/user/Home/homeSlice";

    const rootReducer = {
        products: productReducer,
    }
    const store = configureStore({
        reducer: rootReducer,
    });

    export default store;