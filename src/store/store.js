import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authReducer } from '@/features/auth/index';
import { productsApi } from '@/features/products/index';


export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        auth: authReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch);