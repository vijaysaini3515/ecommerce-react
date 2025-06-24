import { configureStore } from '@reduxjs/toolkit';
import dialogReducer from '../../src/features/product/productModelDialogSlice'

export default configureStore({
  reducer: {
    dialog: dialogReducer
  },
})