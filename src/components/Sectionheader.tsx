import React from "react";
interface Sectionheaderprop{
    title:string;
    subtitle?:string;
}

export const Sectionheader:React.FC<Sectionheaderprop>=({title,subtitle})=>{
    return(
        <div className="mt-10 w-[100%] text-center ">
            <div className="font-medium text-xl text-[#111111e1]">
                {title}
            </div>
            <div className="text-sm  text-[#625e5e8b]">
                {subtitle}
            </div>
            <div className=" w-[2em] mx-auto mt-4 border-b-4 rounded-full border-[#171828]">
            
            </div>
        </div>
    )
}