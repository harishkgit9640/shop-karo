import { createSlice } from '@reduxjs/toolkit'


export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            console.log(action.payload);
            state.items.splice(action.payload, 1);
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        },
    }
})

export const { addItem, removeItem, clearCart } = CartSlice.actions

export default CartSlice.reducer