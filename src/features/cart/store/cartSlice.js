import { createSlice } from '@reduxjs/toolkit';

// const item = {
//     id: string,
//     title: string,
//     price: number,
//     count: number
// }

const initialState = {
    items: [],
    totalCount: 0,
    totalAmount: 0,
}

const calculateItemsCount = (cartItems) => {
    return cartItems.reduce((total, item) => {
        return total += item.count
    }, 0)
}

const calculateTotalAmount = (cartItems) => {
    return cartItems.reduce((total, item) => {
        return total += item.count * item.price
    }, 0)
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find((item) => {
                return item.id === action.payload.id;
            })

            if (existingItem) {
                existingItem.count += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }

            state.totalAmount = calculateTotalAmount(state.items);
            state.totalCount = calculateItemsCount(state.items);
        },

        removeFromCart: (state, action) => {
            const existingItem = state.items.find((item) => {
                return item.id === action.payload.id;
            })

            if (!existingItem) return;

            if (existingItem.count > 1) {
                existingItem.count -= 1;
            } else {
                state.items = state.items.filter((item) => item.id !== existingItem.id)
            }

            state.totalAmount = calculateTotalAmount(state.items);
            state.totalCount = calculateItemsCount(state.items);
        },

        clearCart: (state) => {
            state.items = [];
            state.totalCount = 0;
            state.totalAmount = 0;
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;