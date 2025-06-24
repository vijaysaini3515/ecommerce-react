import React, { useState } from 'react';
import './qtyBox.scss'
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';


const QtyBox = () => {

    const [qtyValue, setQtyValue] = useState(1);

    const increaseQty = () => {
        setQtyValue(qtyValue + 1);

    }
    const decaresQty = () => {
        if (qtyValue === 1) {
            setQtyValue(1)
        } else {
            setQtyValue(qtyValue - 1);
        }
    }


    return (
            <div className='qtyBox flex items-center relative'>
                <input
                    type="number"
                    value={qtyValue}
                    className='w-full pl-5 h-[40px] p-2 text-[15px] focus:outline-none border border-[rgba(0,0,0,0.1)] rounded-sm'
                />

                <div className="flex flex-col items-center justify-around h-[40px] absolute top-0 bottom-0 right-0.5 z-50">
                    <Button onClick={increaseQty} className='!min-w-[25px] !w-[25px] !h-[18px] !text-[#000] hover:!bg-white !rounded-none'>
                        <FaAngleUp className="text-[10px] opacity-55" />
                    </Button>
                    <Button onClick={decaresQty} className='!min-w-[25px] !w-[25px] !h-[18px] !text-[#000] hover:!bg-white !rounded-none'>
                        <FaAngleDown className="text-[10px] opacity-55" />
                    </Button>
                </div>
            </div>
    )
}

export default QtyBox;