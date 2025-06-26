import { configureStore } from '@reduxjs/toolkit';
import dialogReducer from '../../src/features/product/productModelDialogSlice'
import cartDrawerReducer from '../../src/features/cartSlice/cartSlice';

export default configureStore({
  reducer: {
    dialog: dialogReducer,
    cartPanel: cartDrawerReducer,
  },
})