import React, { useState } from 'react';
import './productDetails.scss'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductZoom from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import ProductSlider from '../../components/ProductSlider';
import ProductDetailsComp from '../../components/ProductDetailsComp/index.jsx'



const ProductDetails = () => {
  const [productAction, setProductAction] = useState(null);
  const [activeTab, setActiveTab] = useState(0)



  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link className='link transition' underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link className='link transition' underline="hover" color="inherit" href="/">
              Fashion
            </Link>
            <Link className='link transition' underline="hover" color="inherit" href="/">
              Cropped satin Bomber jacket
            </Link>
          </Breadcrumbs>
        </div>
      </div>


      <section className='bg-white py-5'>

        <div className="container flex flex-col lg:flex-row items-center gap-8">

          <div className="productZoomContainer w-full lg:w-[40%]">
            <ProductZoom />
          </div>

          <div className="productContent w-full lg:w-[60%] p-2 lg:pr-10 lg:pl-10">
            <ProductDetailsComp />
          </div>
          
        </div>

        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-5">
            <span onClick={() => setActiveTab(0)} className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 0 && 'text-[var(--primary)]'}`}>Description</span>
            <span onClick={() => setActiveTab(1)} className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 1 && 'text-[var(--primary)]'}`}>Product Details</span>
            <span onClick={() => setActiveTab(2)} className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 2 && 'text-[var(--primary)]'}`}>Review (29)</span>
          </div>
        </div>

        {
          activeTab === 0 && (
            <div className="container shadow-md w-full py-5 px-8 rounded-md">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <h4>Light weight design</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <h4>Free Shipping and Return</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit excepturi minima quis, libero molestiae pariatur quaerat quae rem perspiciatis eaque.
              </p>
              <h4>Money Back Guarantee</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit excepturi minima quis, libero molestiae.
              </p>
              <h4>Online Support</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit excepturi minim.
              </p>
            </div>
          )
        }

        {
          activeTab === 1 && (

            <div className="container shadow-md w-full py-5 px-8 rounded-md">
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-5">
                        Vendor :
                      </th>
                      <th scope="col" class="px-6 py-5">
                        Size :
                      </th>
                      <th scope="col" class="px-6 py-5">
                        SKU :
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Vegist
                      </th>
                      <td class="px-6 py-4">
                        5kg, 2kg, 3kg
                      </td>
                      <td class="px-6 py-4">
                        123456
                      </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Vegist
                      </th>
                      <td class="px-6 py-4">
                        5kg, 2kg, 3kg
                      </td>
                      <td class="px-6 py-4">
                        123456
                      </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Vegist
                      </th>
                      <td class="px-6 py-4">
                        5kg, 2kg, 3kg
                      </td>
                      <td class="px-6 py-4">
                        123456
                      </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Vegist
                      </th>
                      <td class="px-6 py-4">
                        5kg, 2kg, 3kg
                      </td>
                      <td class="px-6 py-4">
                        123456
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          )
        }

        {
          activeTab === 2 && (
            <div className="container shadow-md w-full py-5 px-8 rounded-md">
              <div className="w-full productReviewContainer">

                <h2 className='text-[18px]'>Customer question & answers</h2>

                <div className="reviewScroll w-full mt-5  pr-5  max-h-[300px] overflow-y-scroll overflow-x-hidden">

                  <div className="review pt-5 pb-5 w-fill border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">

                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img h-[80px] w-[80px] overflow-hidden rounded-full">
                        <img className="w-full" src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg?semt=ais_hybrid" alt="" />
                      </div>
                      <div className="w-[80%]">
                        <h4 className='text-[16px]'>Jofra Stiff</h4>
                        <h5 className='text-[13px] mb-0'>2024-12-01</h5>
                        <p className='!mb-0 !mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero, delectus maiores quos, repudiandae molestiae, quia deleniti recusandae odio quam odit. Nobis perferendis, excepturi natus at alias ullam soluta porro.</p>
                      </div>

                    </div>
                    <Rating name="size-small" defaultValue={5} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 w-fill border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">

                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img h-[80px] w-[80px] overflow-hidden rounded-full">
                        <img className="w-full" src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg?semt=ais_hybrid" alt="" />
                      </div>
                      <div className="w-[80%]">
                        <h4 className='text-[16px]'>Jofra Stiff</h4>
                        <h5 className='text-[13px] mb-0'>2024-12-01</h5>
                        <p className='!mb-0 !mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero, delectus maiores quos, repudiandae molestiae, quia deleniti recusandae odio quam odit. Nobis perferendis, excepturi natus at alias ullam soluta porro.</p>
                      </div>

                    </div>
                    <Rating name="size-small" defaultValue={5} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 w-fill border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">

                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img h-[80px] w-[80px] overflow-hidden rounded-full">
                        <img className="w-full" src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg?semt=ais_hybrid" alt="" />
                      </div>
                      <div className="w-[80%]">
                        <h4 className='text-[16px]'>Jofra Stiff</h4>
                        <h5 className='text-[13px] mb-0'>2024-12-01</h5>
                        <p className='!mb-0 !mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero, delectus maiores quos, repudiandae molestiae, quia deleniti recusandae odio quam odit. Nobis perferendis, excepturi natus at alias ullam soluta porro.</p>
                      </div>

                    </div>
                    <Rating name="size-small" defaultValue={5} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 w-fill border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">

                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img h-[80px] w-[80px] overflow-hidden rounded-full">
                        <img className="w-full" src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg?semt=ais_hybrid" alt="" />
                      </div>
                      <div className="w-[80%]">
                        <h4 className='text-[16px]'>Jofra Stiff</h4>
                        <h5 className='text-[13px] mb-0'>2024-12-01</h5>
                        <p className='!mb-0 !mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero, delectus maiores quos, repudiandae molestiae, quia deleniti recusandae odio quam odit. Nobis perferendis, excepturi natus at alias ullam soluta porro.</p>
                      </div>

                    </div>
                    <Rating name="size-small" defaultValue={5} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 w-fill border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">

                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img h-[80px] w-[80px] overflow-hidden rounded-full">
                        <img className="w-full" src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg?semt=ais_hybrid" alt="" />
                      </div>
                      <div className="w-[80%]">
                        <h4 className='text-[16px]'>Jofra Stiff</h4>
                        <h5 className='text-[13px] mb-0'>2024-12-01</h5>
                        <p className='!mb-0 !mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero, delectus maiores quos, repudiandae molestiae, quia deleniti recusandae odio quam odit. Nobis perferendis, excepturi natus at alias ullam soluta porro.</p>
                      </div>

                    </div>
                    <Rating name="size-small" defaultValue={5} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 w-fill border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">

                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img h-[80px] w-[80px] overflow-hidden rounded-full">
                        <img className="w-full" src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg?semt=ais_hybrid" alt="" />
                      </div>
                      <div className="w-[80%]">
                        <h4 className='text-[16px]'>Jofra Stiff</h4>
                        <h5 className='text-[13px] mb-0'>2024-12-01</h5>
                        <p className='!mb-0 !mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero, delectus maiores quos, repudiandae molestiae, quia deleniti recusandae odio quam odit. Nobis perferendis, excepturi natus at alias ullam soluta porro.</p>
                      </div>

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
                    <br/><br/>
                    <Rating name="size-small" defaultValue={4} />
                    <div className="flex items-center mt-5">
                      <Button className='btn-org'>Submit Review</Button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          )
        }

                <div className="container !mt-5">
                  <h3 className="text-[22px] font-[600]">Latest Products</h3>
                  <ProductSlider items={6} />
                </div>


      </section>


    </>

  )
}

export default ProductDetails;