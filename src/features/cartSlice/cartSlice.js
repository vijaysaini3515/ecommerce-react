// src/features/cartSlice/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart drawer
const initialState = {
  openCartDrawer: false, // default state (closed)
};

const cartSlice = createSlice({
  name: 'cartPanel', 
  initialState,
  reducers: {
    toggleCartDrawer: (state, action) => {
      state.openCartDrawer = action.payload;
    },
  },
});

export const { toggleCartDrawer } = cartSlice.actions;

export const selectCartDrawerState = (state) => state.cartPanel.openCartDrawer;

export default cartSlice.reducer;
