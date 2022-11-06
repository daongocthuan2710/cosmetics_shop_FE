import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./user/homeSlice";
import authReducer from "./user/authSlice";
import cateReducer from "./user/cateSlice";
import breadcrumbReducer from "./user/breadcrumbSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  }
  
    const rootReducer = combineReducers({
        products: productReducer,
        auths: authReducer,
        cates: cateReducer,
        breadcrumb: breadcrumbReducer,
    })

    const persistedReducer = persistReducer(persistConfig, rootReducer)

    const store = configureStore({
        // reducer: rootReducer,
        reducer: persistedReducer,
    });

    export const persistor = persistStore(store);
    export default store;