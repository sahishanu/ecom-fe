import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai"
interface ViewmoreProps{
    text:string;
    path?:string
}

export const Viewmore:React.FC<ViewmoreProps>=({text,path})=>{
const pathUrl:string="/"+path;
return (
    <div>
    <Link href={pathUrl}>
    <button className="flex items-center hover:text-[#F9FBFC] hover:bg-[#171828]  border-2 font-semibold text-xs uppercase border-[#171828] w-fit px-4 py-3  ">
       <span > {text}</span>
       <span className="ml-2" > <AiOutlineArrowRight className="font-bold" size={20}/></span>
    </button>
    </Link>
    </div>
)
}

Viewmore.defaultProps={
    path:""
}