import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const itemExists = state.find((headphone) => headphone.colorVariant === action.payload.colorVariant);
            
            if (itemExists) {                         
               state.slice(itemExists.quantity += action.payload.quantity)
            }
            else {
                state.push(action.payload);
            }
        },
        incrementQuantity: (state, action) => {       
            const item = state.find((item) => item.colorVariant === action.payload);
            state.slice(item.quantity++);
        },
        decrementQuantity: (state, action) => {
            const item = state.find((item) => item.colorVariant === action.payload);
            if (item.quantity === 1) {
                const index = state.findIndex((item) => item.colorVariant === action.payload);
                state.splice(index, 1);
            } else {
                state.slice(item.quantity--);;
            }
        },
        removeFromCart: (state, action) => {
            const index = state.findIndex((item) => item.colorVariant === action.payload);
            state.splice(index, 1);           
        },
    },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, } = cartSlice.actions;

export default cartSlice.reducer;