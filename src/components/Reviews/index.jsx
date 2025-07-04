

import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Reviews = () => {
    return (
        <>
            <div className="w-full productReviewContainer">

                <h2 className='text-[16px] lg:text-[18px]'>Customer question & answers</h2>

                <div className="reviewScroll w-full mt-5  pr-5  max-h-[300px] overflow-y-scroll overflow-x-hidden">

                <div className="review pt-5 pb-5 w-fill border-b border-[rgba(0,0,0,0.1)] flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                    <div className="info w-full lg:w-[20%]  flex flex-col lg:flex-row items-center gap-3">
                        <div className="img h-[80px] w-[80px] overflow-hidden rounded-full">
                        <img
                            className="w-full"
                            src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg?semt=ais_hybrid"
                            alt=""
                        />
                        </div>
                        <div className="w-full text-center lg:w-[50%]">
                        <h4 className="text-[16px]">Jofra Stiff</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        </div>
                    </div>
                    <div className="w-full text-center lg:text-left sm:w-[80%] lg:w-[60%]">
                        <p className="!mb-0 !mt-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero,
                        delectus maiores quos, repudiandae molestiae, quia deleniti recusandae
                        odio quam odit. Nobis perferendis, excepturi natus at alias ullam soluta
                        porro.
                        </p>
                    </div>
                    <Rating name="size-small" defaultValue={5} readOnly />
                </div>

                <div className="review pt-5 pb-5 w-fill border-b border-[rgba(0,0,0,0.1)] flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                    <div className="info w-full lg:w-[20%]  flex flex-col lg:flex-row items-center gap-3">
                        <div className="img h-[80px] w-[80px] overflow-hidden rounded-full">
                        <img
                            className="w-full"
                            src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg?semt=ais_hybrid"
                            alt=""
                        />
                        </div>
                        <div className="w-full text-center lg:w-[50%]">
                        <h4 className="text-[16px]">Jofra Stiff</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        </div>
                    </div>
                    <div className="w-full text-center lg:text-left sm:w-[80%] lg:w-[60%]">
                        <p className="!mb-0 !mt-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero,
                        delectus maiores quos, repudiandae molestiae, quia deleniti recusandae
                        odio quam odit. Nobis perferendis, excepturi natus at alias ullam soluta
                        porro.
                        </p>
                    </div>
                    <Rating name="size-small" defaultValue={5} readOnly />
                </div>

                <div className="review pt-5 pb-5 w-fill border-b border-[rgba(0,0,0,0.1)] flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                    <div className="info w-full lg:w-[20%]  flex flex-col lg:flex-row items-center gap-3">
                        <div className="img h-[80px] w-[80px] overflow-hidden rounded-full">
                        <img
                            className="w-full"
                            src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg?semt=ais_hybrid"
                            alt=""
                        />
                        </div>
                        <div className="w-full text-center lg:w-[50%]">
                        <h4 className="text-[16px]">Jofra Stiff</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        </div>
                    </div>
                    <div className="w-full text-center lg:text-left sm:w-[80%] lg:w-[60%]">
                        <p className="!mb-0 !mt-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero,
                        delectus maiores quos, repudiandae molestiae, quia deleniti recusandae
                        odio quam odit. Nobis perferendis, excepturi natus at alias ullam soluta
                        porro.
                        </p>
                    </div>
                    <Rating name="size-small" defaultValue={5} readOnly />
                </div>

                <div className="review pt-5 pb-5 w-fill border-b border-[rgba(0,0,0,0.1)] flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                    <div className="info w-full lg:w-[20%]  flex flex-col lg:flex-row items-center gap-3">
                        <div className="img h-[80px] w-[80px] overflow-hidden rounded-full">
                        <img
                            className="w-full"
                            src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg?semt=ais_hybrid"
                            alt=""
                        />
                        </div>
                        <div className="w-full text-center lg:w-[50%]">
                        <h4 className="text-[16px]">Jofra Stiff</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        </div>
                    </div>
                    <div className="w-full text-center lg:text-left sm:w-[80%] lg:w-[60%]">
                        <p className="!mb-0 !mt-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero,
                        delectus maiores quos, repudiandae molestiae, quia deleniti recusandae
                        odio quam odit. Nobis perferendis, excepturi natus at alias ullam soluta
                        porro.
                        </p>
                    </div>
                    <Rating name="size-small" defaultValue={5} readOnly />
                </div>

                <div className="review pt-5 pb-5 w-fill border-b border-[rgba(0,0,0,0.1)] flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                    <div className="info w-full lg:w-[20%]  flex flex-col lg:flex-row items-center gap-3">
                        <div className="img h-[80px] w-[80px] overflow-hidden rounded-full">
                        <img
                            className="w-full"
                            src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg?semt=ais_hybrid"
                            alt=""
                        />
                        </div>
                        <div className="w-full text-center lg:w-[50%]">
                        <h4 className="text-[16px]">Jofra Stiff</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        </div>
                    </div>
                    <div className="w-full text-center lg:text-left sm:w-[80%] lg:w-[60%]">
                        <p className="!mb-0 !mt-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero,
                        delectus maiores quos, repudiandae molestiae, quia deleniti recusandae
                        odio quam odit. Nobis perferendis, excepturi natus at alias ullam soluta
                        porro.
                        </p>
                    </div>
                    <Rating name="size-small" defaultValue={5} readOnly />
                </div>

                <div className="review pt-5 pb-5 w-fill border-b border-[rgba(0,0,0,0.1)] flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                    <div className="info w-full lg:w-[20%]  flex flex-col lg:flex-row items-center gap-3">
                        <div className="img h-[80px] w-[80px] overflow-hidden rounded-full">
                        <img
                            className="w-full"
                            src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg?semt=ais_hybrid"
                            alt=""
                        />
                        </div>
                        <div className="w-full text-center lg:w-[50%]">
                        <h4 className="text-[16px]">Jofra Stiff</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        </div>
                    </div>
                    <div className="w-full text-center lg:text-left sm:w-[80%] lg:w-[60%]">
                        <p className="!mb-0 !mt-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero,
                        delectus maiores quos, repudiandae molestiae, quia deleniti recusandae
                        odio quam odit. Nobis perferendis, excepturi natus at alias ullam soluta
                        porro.
                        </p>
                    </div>
                    <Rating name="size-small" defaultValue={5} readOnly />
                </div>


                    

                </div>

                <div className="reviewForm bg-[#fafafa] p-4 rounded-md mt-5">
                    <h2 className='text-[18px]'>Add a review </h2>
                    <form className='w-full  mt-5'>
                        <TextField
                            label='Write a review'
                            fullWidth
                            multiline
                            rows={5}
                        />
                        <br /><br />
                        <Rating name="size-small" defaultValue={4} />
                        <div className="flex items-center mt-5">
                            <Button className='btn-org'>Submit Review</Button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Reviews;