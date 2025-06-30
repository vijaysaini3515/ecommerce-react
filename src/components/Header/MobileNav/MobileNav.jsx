
import './mobileNav.scss'
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import Button from'@mui/material/Button';
import { NavLink } from "react-router-dom";


const MobileNav =() =>{
    return(
        <div className='mobileNav z-60 bg-white p-1 px-3 w-full grid grid-cols-5 place-items-center gap-5 fixed bottom-0 left-0'>

          <NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <Button className="flex-col !w-[40px] !m-w-[40px] !capitalize !text-black">
                    <GoHome  size={18}/>
                    <span className="text-[12px]">Home</span>
            </Button>
          </NavLink>

            <Button className="flex-col !w-[40px] !m-w-[40px] !capitalize !text-black">
                    <IoSearch  size={18}/>
                    <span className="text-[12px]">Search</span>
            </Button>

          
            <NavLink to='/my-list'>
                <Button className="flex-col !w-[40px] !m-w-[40px] !capitalize !text-black">
                    <IoMdHeartEmpty  size={18}/>
                    <span className="text-[12px]">WishList</span>
                </Button>
            </NavLink>

            <NavLink to='/my-orders'>
                <Button className="flex-col !w-[40px] !m-w-[40px] !capitalize !text-black">
                    <IoBagCheckSharp  size={18}/>
                    <span className="text-[12px]">Orders</span>
                </Button>
            </NavLink>

            <NavLink to='/my-account'>
                <Button className="flex-col !w-[40px] !m-w-[40px] !capitalize !text-black">
                    <FaRegUser  size={18}/>
                    <span className="text-[12px]">Account</span>
                </Button>
            </NavLink>

          
          
          
        </div>
    )
}

export default MobileNav; 