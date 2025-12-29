import {configureStore } from "@reduxjs/toolkit"
import { authApi } from "../services/auth";

const store = configureStore({
    reducer: {
         [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    'authApi/executeMutation/rejected',
                    'authApi/executeQuery/fulfilled',
                ],
                ignoredPaths: [
                    'authApi.mutations',
                    'authApi.queries',
                ],
            },
        }).concat(authApi.middleware)
})

window.store = store;
console.log(store);

export default store;