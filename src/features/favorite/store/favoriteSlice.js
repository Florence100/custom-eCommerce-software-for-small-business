import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalCount: 0,
}

const calculateItemsCount = (favoriteItems) => {
    return favoriteItems.length;
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const existingItem = state.items.find((item) => {
                return item.id === action.payload.id;
            })

            if (existingItem) {
                state.items = state.items.filter((item) => {
                    return item.id !== action.payload.id;
                })

                state.totalCount = calculateItemsCount(state.items);
            } else {
                state.items.push({
                    ...action.payload
                })

                state.totalCount = calculateItemsCount(state.items);
            }
        },

        clearFavorite: (state) => {
            state.items = [];
            state.totalCount = 0;
        }
    }
})

export const { toggleFavorite, clearFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;