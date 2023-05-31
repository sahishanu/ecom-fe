import React,{ useState } from "react";
import{ FiSearch } from "react-icons/fi"
import{ IoMdArrowDropdown } from "react-icons/io"
const Searchbar=()=>{
    const [isOpen, setIsOpen] = useState(false);
// TODO: change toggle button to dropdown on hover and remove the click button
        const toggleDropdown=()=>{
            setIsOpen(!isOpen);
        }
    return (
<div className="w-[60%] mx-4">
    <div className="flex  ">
        <div className="relative">
        <button onClick={toggleDropdown} className="border-[0.05em]  border-[#3B3B47] text-[#BFBFC7] bg-[#3B3B47] p-2 rounded-l-md text-xs flex items-center justify-between">
            All Categories
            <IoMdArrowDropdown size={20}/>
        </button>
        <div className= {isOpen ?"absolute w-full z-50 shadow-lg border-[#3B3B47] text-[#BFBFC7] bg-[#3B3B47] rounded-b-md  rounded-bc-md text-sm " : "hidden"}>
        {/* Dropdown content */}
        <p className=" p-1 text-center  hover:bg-[#767687]">Item 1</p>
        <p className=" p-1 text-center  hover:bg-[#767687]">Item 2</p>
        <p className=" p-1 text-center  hover:bg-[#767687]"> Item 3</p>
      </div>
        </div>
        <input type="text" placeholder="search product here.." className=" border-[0.05em] p-2 border-[#3B3B47] w-[90%] bg-inherit  "/>
        <button className="border-[0.05em]border-[#3B3B47] bg-[#2B967E] p-2 rounded-r-md text-xs flex items-center justify-between">
            
            <FiSearch size={20} color="#BFBFC7"/>
        </button>

    </div>
</div>

    );
};
export default Searchbar