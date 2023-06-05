import { HiOutlineBell, HiOutlineShoppingBag } from "react-icons/hi"
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
interface CartIconProps {
    cartCount: number;
  }
export const Addtocart:React.FC<CartIconProps> =({cartCount})=>{
    return(
        <div className="relative">
            <HiOutlineShoppingBag className="text-[#BFBFC7] m-1 mt-4" size={20} />
            {cartCount > 0 && (
        <span className="absolute top-3 right-0 w-3 h-3 bg-red-500 rounded-full flex justify-center items-center">
          <span className="text-white text-[10px] font-bold">{cartCount}</span>
        </span>)}
        </div>
    );
};
Addtocart.defaultProps={
    cartCount:0,
}

interface NotificationIconProps {
    notificationCount: number;
  }



export const NotificationIcon:React.FC<NotificationIconProps> =({notificationCount})=>{
    return(
        <div className="relative">
            <HiOutlineBell className="text-[#BFBFC7] m-1 mt-4" size={20} />
            {notificationCount > 0 && (
        <span className="absolute top-3 right-0 w-3 h-3 bg-red-500 rounded-full flex justify-center items-center">
          <span className="text-white text-[10px] font-bold">{notificationCount}</span>
        </span>)}
        </div>
    );
};
NotificationIcon.defaultProps={
    notificationCount:0,
}

export const ProfileIcon =()=>{
    return(
        <div className="  ml-2 flex justify-between items-center">
          
          <img className="mt-2 h-8 w-8 rounded-full" src="./images/profile.jpg" alt="" />
          
          <div className="ml-2 mt-3"><IoMdArrowDropdown size={25}/></div>
        </div>
    );
};


export const Movetop=()=>{
    return(
        <div className="fixed bottom-4  bg-white rounded-full right-4">
            <Link href={"#"}><BsFillArrowUpCircleFill size={30}/></Link>
            </div>
    )
}