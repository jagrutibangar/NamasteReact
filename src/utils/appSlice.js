import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({

        name : 'app',
        initialState: {
            isSidebarOpen: true,
        },
        reducers: {

            toggleSidebar: (state) => {
                state.isSidebarOpen = !state.isSidebarOpen;
            },

            closeMenu: (state) =>{
                state.isSidebarOpen = false;
            },
           
        },
    }
);

export const {toggleSidebar, closeMenu} = appSlice.actions;
export default appSlice.reducer;