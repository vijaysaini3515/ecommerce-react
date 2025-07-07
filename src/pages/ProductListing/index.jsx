import React,{useState} from 'react';
import './productListing.scss';
import Sidebar from '../../components/Sidebar';
import ProductItem from '../../components/ProductItem'

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';


import { BsGridFill } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import ProductItemListView from '../../components/ProductItemListView';
import { MdFilterListAlt } from "react-icons/md";
import { useSelector } from 'react-redux';
const ProductListing = () => {
  const windowWidth = useSelector(state => state.window.width);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [itemView,setItemView] = useState('Grid')
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };



  return (
    <div className="py-5 pb-0">

      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link className='link transition' underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link className='link transition' underline="hover" color="inherit" href="/">
            Fashion
          </Link>
        </Breadcrumbs>
      </div>

      <div className="bg-white p-2 mt-4">
        <div className='container flex gap-3'>

          <div
           className={`sidebarWrapper transition-all  sticky top-0 z-90 overflow-y-auto lg:w-[20%] h-full p-3 bg-white ${sidebarVisible || windowWidth >= 992 ? 'block' : 'hidden'}`}
          >
            <Sidebar setSidebarVisible={setSidebarVisible} />
          </div>

          <div className={`rightContent bg-white w-full py-3 ${ sidebarVisible === true ? 'hidden' : 'block'}`}>

            <div className="bg-[#f1f1f1] sticky top-[0px] left-0 z-99 w-full p-2 mb-4 rounded-sm flex items-center justify-between">
                <div className="col1 itemViewAction flex items-center">
                    <Button onClick={()=>setItemView('Grid')} className={`!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#000] ${itemView === 'Grid' && 'active'}`}>
                      <BsGridFill className='text-[rgba(0,0,0,0.7)]' />
                    </Button>
                    <Button onClick={()=>setItemView('List')} className={`!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#000] ${itemView === 'List' && 'active'}`}>
                      <TiThMenu className='text-[rgba(0,0,0,0.7)]' />
                    </Button>
                    {
                      windowWidth < 992 && (
                        <Button onClick={toggleSidebar} className={`!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#000]`}>
                          <MdFilterListAlt className='text-[rgba(0,0,0,0.7)]' />
                        </Button>
                      )
                    }
                        
                     
                    
                    <span className='text-[14px] hidden lg:block font-[500] pl-3 text-[rgba(0,0,0,0.7)]'>
                      There are 27 products
                    </span>
                </div>

                <div className="col2 flex items-center justify-end gap-1 lg:gap-3 lg:pr-3">
                      <span className='text-[12px] lg:text-[14px] font-[500] lg:pl-3 text-[rgba(0,0,0,0.7)]'>
                        Short By :
                      </span>
                      <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        className='!bg-white !text-[10px] lg:!text-[12px] !capitalize !text-[#000] !border !border-[rgba(0,0,0,0.1)]'
                      >
                        Sales,highest to lowest
                      </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                        >
                            <MenuItem className='!bg-white !text-[13px] !capitalize !text-[#000]' onClick={handleClose}>Relevance</MenuItem>
                            <MenuItem className='!bg-white !text-[13px] !capitalize !text-[#000]' onClick={handleClose}>Name A to Z</MenuItem>
                            <MenuItem className='!bg-white !text-[13px] !capitalize !text-[#000]' onClick={handleClose}>Name Z to A</MenuItem>
                            <MenuItem className='!bg-white !text-[13px] !capitalize !text-[#000]' onClick={handleClose}>Price Low to High</MenuItem>
                            <MenuItem className='!bg-white !text-[13px] !capitalize !text-[#000]' onClick={handleClose}>Price High to Low</MenuItem>
                        </Menu>
                </div>

            </div>



            <div className={`grid ${itemView === 'Grid'? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-1' } gap-4`}>
                {
                  itemView === 'Grid' ? (
                    <>
                      <ProductItem />
                      <ProductItem />
                      <ProductItem />
                      <ProductItem />
                      <ProductItem />
                      <ProductItem />
                      <ProductItem />
                      <ProductItem />
                      <ProductItem />
                      <ProductItem />
                      <ProductItem />
                      <ProductItem />
                      <ProductItem />
                      <ProductItem />
                      <ProductItem />
                      <ProductItem />
                    </>
                  ) :(
                    <>
                      <ProductItemListView />
                      <ProductItemListView />
                      <ProductItemListView />
                      <ProductItemListView />
                      <ProductItemListView />
                      <ProductItemListView />
                      <ProductItemListView />
                      <ProductItemListView />
                      <ProductItemListView />
                      <ProductItemListView />
                      <ProductItemListView />
                      <ProductItemListView />
                      <ProductItemListView />
                      <ProductItemListView />
                      <ProductItemListView />
                      <ProductItemListView />
                    </>
                  )
                }

               
            </div>

            <div className='flex items-center justify-center mt-10'>
               <Pagination count={10} size="large" />
            </div>


          </div>
          
        </div>
      </div>
        
      
    </div>
  )
}

export default ProductListing;