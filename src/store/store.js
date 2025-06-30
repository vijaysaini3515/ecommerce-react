import { configureStore } from '@reduxjs/toolkit';
import dialogReducer from '../../src/features/product/productModelDialogSlice'
import cartDrawerReducer from '../../src/features/cartSlice/cartSlice';
import windowReducer from '../../src/features/windowSlice/windowSlice';

export default configureStore({
  reducer: {
    dialog: dialogReducer,
    cartPanel: cartDrawerReducer,
    window: windowReducer,
  },
})