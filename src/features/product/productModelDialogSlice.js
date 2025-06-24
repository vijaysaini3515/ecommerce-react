import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    openProductDetailDialog: false,
};



const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        openDialog: (state) => {
          state.openProductDetailDialog = true;
        },
        closeDialog: (state) => {
          state.openProductDetailDialog = false;
        },
        setDialog: (state, action) => {
          state.openProductDetailDialog = action.payload;
        },
      },
})

export const { openDialog, closeDialog, setDialog } = dialogSlice.actions;
export default dialogSlice.reducer;