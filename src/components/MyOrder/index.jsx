import React, { useState } from 'react';
import AccountSidebar from '../AccountSidebar'
import Badge from '../Badge';
import RowImg from '../../assets/images/carrot.jpeg'
import { Button } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const MyOrder = () => {
  const[isOpenOrderProduct,setOpenOrderProduct] = useState(null);



  const isShowOrderProducts =(index)=>{
   if(isOpenOrderProduct === index){
    setOpenOrderProduct(null)
   }else{
    setOpenOrderProduct(index)
   }
  }



  return (
    <div className='py-10 w-full'>
            <div className="container flex gap-5">

                <div className="col1 w-[20%]">
                    <AccountSidebar />
                </div>

                <div className="col1 w-[80%]">
                   <div className="bg-white shadow-md rounded-md">
                     <div className="py-5 px-3 border-b border-[#ccc]">
                        <h2>My orders</h2>
                        <p className='!mt-0 !mb-0'>There are <span className='font-bold text-[var(--primary)]'>2 Order </span> in you List</p>
                        {/* this table is getting form preline website */}
                        <div class="flex flex-col mt-5">
                          <div class="-m-1.5 overflow-x-auto">
                            <div class="p-1.5 min-w-full inline-block align-middle">
                              <div class="overflow-hidden">
                                <table class="min-w-full divide-y divide-gray-200">
                                  <thead>
                                    <tr>
                                      <th
                                        scope="col"
                                        class="px-6 py-3 text-start  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                      </th>
                                      <th
                                        scope="col"
                                        class="px-6 py-3 text-start  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Order Id
                                      </th>
                                      <th
                                        scope="col"
                                        class="px-6 py-3 text-start  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Payment Id
                                      </th>
                                      <th
                                        scope="col"
                                        class="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Name
                                      </th>
                                      <th
                                        scope="col"
                                        class="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Phone Number
                                      </th>
                                      <th
                                        scope="col"
                                        class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Address
                                      </th>
                                      <th
                                        scope="col"
                                        class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                      >
                                        PinCode
                                      </th>
                                      <th
                                        scope="col"
                                        class="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Total Amount
                                      </th>
                                      <th
                                        scope="col"
                                        class="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Email
                                      </th>
                                      <th
                                        scope="col"
                                        class="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        User Id
                                      </th>
                                      <th
                                        scope="col"
                                        class="px-6 py-3  whitespace-nowrap text-center text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Order Status
                                      </th>
                                      <th
                                        scope="col"
                                        class="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Date
                                      </th>
                                      
                                    </tr>
                                  </thead>
                                  <tbody>
{/* first row */}
                                    <tr class="odd:bg-white border-b border-[rgba(0,0,0,0.8)]">
                                      <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                        <Button onClick={()=>isShowOrderProducts(0)} className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]'>
                                           {
                                            isOpenOrderProduct === 0 ? <FaAngleUp /> :<FaAngleDown />
                                           } 
                                        </Button>
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          <span className='text-[var(--primary)]'>1cnm81u2y984y19823ry</span>
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          <span className='text-[var(--primary)]'>PAY_1u2y984y198</span>
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          John Brown
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          9090909090
                                        </td>
                                        <td class="px-6 py-4 text-center text-sm font-medium text-gray-800">
                                          <span className='block w-[300px]'>Flat 10, Green Heights Apartments, 2nd Cross, MG Road, Ashok Nagar, Bengaluru, Karnataka 560001, India</span>
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          332002
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          $300
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          Test@gmail.com
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          <span className='text-[var(--primary)]'>4nc9ufw984893974r30</span>
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          <Badge status="delivered" />
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          20-4-2026
                                        </td>
                                    </tr>

                                        {
                                          isOpenOrderProduct === 0 && (
                                            <tr>
                                              <td className=' pl-20' colSpan={6}>
                                              <div class="-m-1.5 overflow-x-auto">
                                                  <div class="p-1.5 min-w-full inline-block align-middle">
                                                    <div class="overflow-hidden">
                                                      <table class="min-w-full divide-y divide-gray-200">
                                                        <thead>
                                                          <tr>
                                                            <th
                                                              scope="col"
                                                              class="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Product Id
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              class="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Product Title
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              class="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Image
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              class="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Quantity
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Price
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Sub Total
                                                            </th>
                                                          </tr>
                                                        </thead>
                                                        <tbody>
                                                          <tr class="odd:bg-white ">
                                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              <span className="text-[var(--primary)]">
                                                                1cnm81u2y984y19823ry
                                                              </span>
                                                            </td>
                                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              Orange with lemon juice
                                                            </td>
                                                            <td class="px-6 py-4 flex items-center justify-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              <img
                                                                className="w-[60px] h-[60px] object-cover rounded-md"
                                                                src={RowImg}
                                                                alt=""
                                                              />
                                                            </td>
                                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              1
                                                            </td>
                                                            <td class="px-6 py-4 text-center text-sm font-medium text-gray-800">
                                                              $300
                                                            </td>
                                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              $320
                                                            </td>
                                                          </tr>
                                                          <tr class="odd:bg-white ">
                                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              <span className="text-[var(--primary)]">
                                                                1cnm81u2y984y19823ry
                                                              </span>
                                                            </td>
                                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              Orange with lemon juice
                                                            </td>
                                                            <td class="px-6 py-4 flex items-center justify-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              <img
                                                                className="w-[60px] h-[60px] object-cover rounded-md"
                                                                src={RowImg}
                                                                alt=""
                                                              />
                                                            </td>
                                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              1
                                                            </td>
                                                            <td class="px-6 py-4 text-center text-sm font-medium text-gray-800">
                                                              $300
                                                            </td>
                                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              $320
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </div>
                                                  </div>
                                              </div>
                                              </td>
                                            </tr>
                                          )
                                        }

                                    
{/* second row */}
                                         
                                    <tr class="odd:bg-white border-b border-[rgba(0,0,0,0.8)]">
                                      <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                        <Button onClick={()=>isShowOrderProducts(1)} className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]'>
                                           {
                                            isOpenOrderProduct === 1 ? <FaAngleUp /> :<FaAngleDown />
                                           } 
                                        </Button>
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          <span className='text-[var(--primary)]'>1cnm81u2y984y19823ry</span>
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          <span className='text-[var(--primary)]'>PAY_1u2y984y198</span>
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          John Brown
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          9090909090
                                        </td>
                                        <td class="px-6 py-4 text-center text-sm font-medium text-gray-800">
                                          <span className='block w-[300px]'>Flat 10, Green Heights Apartments, 2nd Cross, MG Road, Ashok Nagar, Bengaluru, Karnataka 560001, India</span>
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          332002
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          $300
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          Test@gmail.com
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          <span className='text-[var(--primary)]'>4nc9ufw984893974r30</span>
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          <Badge status="delivered" />
                                        </td>
                                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          20-4-2026
                                        </td>
                                    </tr>

                                        {
                                          isOpenOrderProduct === 1 && (
                                            <tr>
                                              <td className=' pl-20' colSpan={6}>
                                              <div class="-m-1.5 overflow-x-auto">
                                                  <div class="p-1.5 min-w-full inline-block align-middle">
                                                    <div class="overflow-hidden">
                                                      <table class="min-w-full divide-y divide-gray-200">
                                                        <thead>
                                                          <tr>
                                                            <th
                                                              scope="col"
                                                              class="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Product Id
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              class="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Product Title
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              class="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Image
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              class="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Quantity
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Price
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Sub Total
                                                            </th>
                                                          </tr>
                                                        </thead>
                                                        <tbody>
                                                          <tr class="odd:bg-white ">
                                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              <span className="text-[var(--primary)]">
                                                                1cnm81u2y984y19823ry
                                                              </span>
                                                            </td>
                                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              Orange with lemon juice
                                                            </td>
                                                            <td class="px-6 py-4 flex items-center justify-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              <img
                                                                className="w-[60px] h-[60px] object-cover rounded-md"
                                                                src={RowImg}
                                                                alt=""
                                                              />
                                                            </td>
                                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              1
                                                            </td>
                                                            <td class="px-6 py-4 text-center text-sm font-medium text-gray-800">
                                                              $300
                                                            </td>
                                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              $320
                                                            </td>
                                                          </tr>
                                                          <tr class="odd:bg-white ">
                                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              <span className="text-[var(--primary)]">
                                                                1cnm81u2y984y19823ry
                                                              </span>
                                                            </td>
                                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              Orange with lemon juice
                                                            </td>
                                                            <td class="px-6 py-4 flex items-center justify-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              <img
                                                                className="w-[60px] h-[60px] object-cover rounded-md"
                                                                src={RowImg}
                                                                alt=""
                                                              />
                                                            </td>
                                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              1
                                                            </td>
                                                            <td class="px-6 py-4 text-center text-sm font-medium text-gray-800">
                                                              $300
                                                            </td>
                                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              $320
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </div>
                                                  </div>
                                              </div>
                                              </td>
                                            </tr>
                                          )
                                        }

                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>
            </div>
        </div>
  )
}

export default MyOrder;






