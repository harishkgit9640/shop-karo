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
            state.items.splice(action.payload, 1);
        },
        itemQuantity: (state, action) => {
            state.items.filter((item) => item.id === action.payload.id ? item.price * action.payload.item_count : "no data")
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        },
    }
})

export const { addItem, removeItem, clearCart, itemQuantity } = CartSlice.actions

export default CartSlice.reducer