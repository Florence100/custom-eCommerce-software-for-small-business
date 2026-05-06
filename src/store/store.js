import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '@/features/auth/index';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
})