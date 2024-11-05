import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {authApi} from "../../modules/Auth/api/AuthApi";
import {userApi} from "../../modules/User/api/UserApi";
import { productApi } from "../../modules/Product/api/ProductApi";
// import userReducer from "./reducers/UserSlice";
// import orderReducer from "./reducers/orders/OrderSlice";
// import { userApi } from "@/modules/User/api/UserApi";
// import { ordersApi } from "./features/orders/ordersApi";
// import { productsApi } from "./features/products/productsApi";

const rootReducer = combineReducers({
    [productApi.reducerPath]:productApi.reducer,
    // userReducer,
    // orderReducer,
    [userApi.reducerPath]:userApi.reducer,
    [authApi.reducerPath]:authApi.reducer,
    // [ordersApi.reducerPath]:ordersApi.reducer,
    // [productApi.reducerPath]:productApi.reducer
});

export const setupStore = ()=>{
    return configureStore({
         reducer:rootReducer,
         middleware(getDefaultMiddleware) {
             return getDefaultMiddleware().concat(
                userApi.middleware,
                authApi.middleware,
                productApi.middleware
                // ordersApi.middleware,
                // productsApi.middleware
             )
         },
    });
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];