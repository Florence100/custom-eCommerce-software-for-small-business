import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authReducer } from '@/features/auth';
import { cartReducer } from '@/features/cart';
import { favoriteReducer } from '@/features/favorite';
import { productsApi } from '@/features/products';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        auth: authReducer,
        cart: cartReducer,
        favorite: favoriteReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch);