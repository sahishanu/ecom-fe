import Image from "next/image";
import Link from "next/link";
import React from "react";
import{ FcLikePlaceholder } from 'react-icons/fc'

interface Productsmprops{
    url:string;
    name:string;
}
export const ProductSmall:React.FC<Productsmprops>=({url,name})=>{
    return (
        <div className="  hover:scale-110 transition-transform duration-300 ">
            <div className="">
            <Image src={url} width={100} height={100} className="ounded-t-lg w-[11.59vw] h-[20vh]"   alt={""}/>
            </div>
            <div className=" text-xs text-center pt-2 rounded-b-lg bg-white font-semibold uppercase">
                    {name}
            </div>
        </div>
    )
}

interface ProductProp{
    name:string;
    cost:number;
    new?:boolean;
    discription?:string;
    imgUrl:string;
    path:string;

}
export const Product:React.FC<ProductProp>=({name,cost,imgUrl,path})=>{
return (
    
         <div className=" mt-4 w-[90%] h-full mx-auto hover:scale-110 transition-transform duration-300 ">
            <Link href="/product/[productId]" as={path}>
            <div className=" relative">
                <div className=" absolute text-black top-[2%] left-[87%]">
                    <FcLikePlaceholder/>
                </div>
               
                <Image src={imgUrl} alt={""} width={100} height={100} className=" w-full h-[30vh]"/>
            
            <div className="  text-xs text-center pt-2  bg-white ">
            <div className=" text-xs text-center pt-2  bg-white font-semibold uppercase">
                    {name}
            </div>
            <div>
            ₹ {cost}
            </div>
            </div>
            </div>
            </Link>
        </div>
    
)
}