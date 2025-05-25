import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const appStore = configureStore({
    reducer: {
        //Contains the smaller reducers for the application
        cart: cartReducer,
    }
});

export default appStore;