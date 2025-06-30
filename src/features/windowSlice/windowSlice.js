// src/store/windowSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  width: window.innerWidth,
};

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    setWindowWidth: (state, action) => {
      state.width = action.payload;
    },
  },
});

export const { setWindowWidth } = windowSlice.actions;
export default windowSlice.reducer;
