import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    //Configuring the slice
    name: "cart",
    initialState: {
        cartItems: []
    },

    //Multiple reducers can be defined in a slice
    //Reducers are functions that take the current state and an action as arguments, and return a new state

    reducers: {
        //Defining reducers which will map to an action
        //These reducers will be used to modify the state of the cart

        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
            // action.payload is the item to be added to the cart
            // action is an object that contains the type of action and the payload which is the data to be added
        },

        removeFromCart: (state, action) => {
            const index = state.cartItems.findIndex(item => item.card.info.id === action.payload.id);
            // action.payload is the item to be removed from the cart
            if (index !== -1) {
                state.cartItems.splice(index, 1);
                // If the item is found, remove it from the cart
            }
        },

        clearCart: () => {
            return {items: []};
        }
    }
});

//exporting actions and reducer
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;