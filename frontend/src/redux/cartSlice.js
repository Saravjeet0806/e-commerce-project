import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
}
const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers: {
            addToCart: (state, action) => {
                const item = action.payload;
                const itemExist = state.cartItems.find((x) => x._id === item._id); //_id = productId
                if (itemExist) {
                    state.cartItems = state.cartItems.map((x)=>x._id === item._id? item: x)
                } else {
                    state.cartItems = [...state.cartItems, item];
                }
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            },
            removeFromCart: (state, action) => {
                const item = action.payload;
                state.cartItems = state.cartItems.filter((x) => x._id !== item._id);
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            },
            clearCart: (state)=>{
                state.cartItems = [];
                localStorage.removeItem('cartItems');
            },
        }
    }
);

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;