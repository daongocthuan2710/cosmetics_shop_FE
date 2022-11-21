import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./user/homeSlice";
import authReducer from "./authSlice";
import cateReducer from "./user/cateSlice";
import cartReducer from "./user/cartSlice";
import cartListReducer from "./user/cartListSlice";
import cartTotalPriceReducer from "./user/cartTotalPriceSlice";
import loginReducer from "./user/loginSlice";
import breadcrumbReducer from "./user/breadcrumbSlice";
import storage from 'redux-persist/lib/storage';
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
  }
  
    const rootReducer = combineReducers({
        products: productReducer,
        auths: authReducer,
        cates: cateReducer,
        breadcrumb: breadcrumbReducer,
        login: loginReducer,
        cart: cartReducer,
        cartList: cartListReducer,
        cartTotalPrice: cartTotalPriceReducer
    })

    const persistedReducer = persistReducer(persistConfig, rootReducer)

    const store = configureStore({
        // reducer: rootReducer,
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });

    export const persistor = persistStore(store);
    export default store;