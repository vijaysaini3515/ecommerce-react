import React,{useState} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductZoom from '../../components/ProductZoom';
import { IoCloseSharp } from "react-icons/io5";
import ProductDetailsComp from '../../components/ProductDetailsComp'
import { useDispatch, useSelector } from 'react-redux';
import { openDialog, closeDialog } from '../../features/product/productModelDialogSlice'



const ProductDetailDialog = () => {
  const dispatch = useDispatch();

  const openProductDetailDialog = useSelector(
    (state) => state.dialog.openProductDetailDialog
  );

  const handleCloseProductDetailDialog = () => {
    dispatch(closeDialog());
  };




  return (
    <div>
       <Button variant="outlined" onClick={() => dispatch(openDialog())}>
        Open alert dialog
      </Button>
      <Dialog
        open={openProductDetailDialog}
        onClose={handleCloseProductDetailDialog}
        fullWidth
        maxWidth='lg'
        className='productDetailModel'
        PaperProps={{
          sx: {
            borderRadius: '12px', // Change to any radius you want
          },
        }}
      >
        <DialogContent sx={{padding:"20px"}}>
          <div className="productDetailModelContainer flex items-center w-full relative">
            <Button onClick={handleCloseProductDetailDialog} className='!bg-[#f1f1f1] !h-[40px] !w-[40px] !min-w-[40px] !rounded-full !absolute top-[0px] right-[0px]'><IoCloseSharp className='text-[20px] text-[#000]' /></Button>
            <div className="col1 w-[40%]">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] py-8 px-8 pr-16">
              <ProductDetailsComp />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProductDetailDialog;