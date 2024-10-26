import { configureStore } from "@reduxjs/toolkit";
import CartReducers from './CartSlice';

const AppStore = configureStore({
    reducer: {
        cart: CartReducers
    },
})


export default AppStore