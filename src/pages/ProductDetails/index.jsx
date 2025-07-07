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
import Reviews from '../../components/Reviews/index.jsx';



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

        <div className="container flex flex-col lg:flex-row items-center gap-2">

          <div className="productZoomContainer w-full lg:w-[40%]">
            <ProductZoom />
          </div>

          <div className="productContent w-full lg:w-[60%] p-2 lg:pr-10 lg:pl-10">
            <ProductDetailsComp />
          </div>
          
        </div>

        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-5">
            <span onClick={() => setActiveTab(0)} className={`link text-[14px] lg:text-[17px] cursor-pointer font-[500] ${activeTab === 0 && 'text-[var(--primary)] border-b'}`}>Description</span>
            <span onClick={() => setActiveTab(1)} className={`link text-[14px] lg:text-[17px] cursor-pointer font-[500] ${activeTab === 1 && 'text-[var(--primary)] border-b'}`}>Product Details</span>
            <span onClick={() => setActiveTab(2)} className={`link text-[14px] lg:text-[17px] cursor-pointer font-[500] ${activeTab === 2 && 'text-[var(--primary)] border-b'}`}>Review (29)</span>
          </div>
        </div>

        {
          activeTab === 0 && (
            <div className="container shadow-md w-full p-2 lg:py-5 lg:px-8 rounded-md">
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

            <div className="container shadow-md w-full p-2 lg:py-5 lg:px-8 rounded-md">
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
            <div className="container shadow-none lg:shadow-md  w-full sm:width-[80%]  p-0 lg:py-5 lg:px-8 rounded-md">
              <Reviews />
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