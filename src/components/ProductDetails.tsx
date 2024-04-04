import { ProductModel } from "@/models/product"
import Image from "next/image";

import { useEffect, useState } from "react";


interface ProductDetailsProps{
    product:ProductModel ;
}
export const ProductDetails:React.FC<ProductDetailsProps>=({product})=>{
    const[data,setData]= useState<ProductModel>({
                "id": -1,
                "title": "",
                "description": "",
                "price": -1,
                "discountPercentage": -1,
                "rating": -1,
                "stock": -1,
                "brand": "",
                "category": "",
                "thumbnail": "",
                "images": []
              }
    );
    const[ quantity,setQuantity]= useState<number>(1);
    useEffect(()=>{
        if(product!=undefined)
        setData(product);
    },[product])
    
    const incQuentity= ()=>{
        setQuantity((prev)=>{
            return prev+1<= data.stock? prev+1 : data.stock
        });
    }
    const decQuentity= ()=>{
        setQuantity((prev)=>{
         return   prev-1>0? prev-1 :1;
        });
    }

    return (
        <div className=" mt-[20px]">
           <div className="  w-[88%] mx-auto flex justify-left">
            <div className="w-[50%]">
            {/* Image div */}
            <div className="grid grid-cols-2 gap-2">
                {
                   data?.images.map((imgurl,index)=>{
                    return <div key={index}>
                        <Image src={imgurl} alt={data.title} width={100} height={100} className="w-full h-[50vh]"/>
                    </div>
                   }) 
                }
            </div>
            </div>
            <div className="w-[50%] ml-[20px]">
            {/* product details */}
            <div className="text-[1.5em] tracking-wide font-medium capitalize">
                {data?.title} {data?.brand} {data?.category}
            </div>
           
            <div className="text-[.8em] font-light uppercase my-2">
                id: {data?.id} 
            </div>
            <div className="text-[1.6em] font-semibold" >
              ₹ {data?.price} <span className=" font-[300] text-[#110202dd] text-[.7em] line-through">₹{((data?.price*100)/(100-data?.discountPercentage)).toFixed(2) }</span>
              <span className=" font-[300] text-[#4e71b38c] text-[.8em] "> ({data?.discountPercentage}%)</span>
            </div >
            {
                data.stock<25 && <div className="text-[0.88em] font-light mt-[5px] uppercase text-[#12013d]">
                hurry !!! {data.stock} left
            </div>
            }

            <div className="mt-8">
                <div  className=" text-[1em] font-semibold" >Quantity</div>
                <div className="font-medium text-2xl ">
                    <button onClick={decQuentity} className="border-[.5px] px-[6px] font-medium text-2xl text-center border-[#111] mr-5 mt-1 hover:bg-[#d5ccd565]">-</button>
                    {quantity}
                    <button onClick={incQuentity} className="border-[.5px] px-[6px] font-medium text-2xl text-center border-[#111] ml-5 mt-1 hover:bg-[#d5ccd565]">+</button>
                </div>
            </div>

            <div className=" mt-10 text-[.88em] font-semibold  tracking-wide ">
                <button className="border-[1px] border-[#143a60] p-1 uppercase mr-1 hover:shadow-sm hover:shadow-[#11111161] "> add to whishlist</button>
                <button className="border-[1px] border-[#143a60] text-[#fff] bg-[#143a60] p-1 uppercase ml-1 hover:shadow-sm hover:shadow-[#11111161]"> add to Cart</button>
            </div>
            
            <div className="border-[0.5px] border-[#11111160] mt-10"></div>

            <div className="mt-5">
                <div className=" text-[1.2em] font-semibold tracking-widest py-2">Product Description</div>
                <div className=" capitalize tracking-widest">{data.brand} {data.title} {data.category} {data.description} </div>
            </div>

            <div className="border-[0.5px] border-[#11111160] mt-10"></div>

            <div className="mt-5">
                <div className=" text-[1.2em] font-semibold tracking-widest py-2">Return Policy</div>
                <div className=" capitalize tracking-widest">Return and Exchange will be available for 7 days from the date of order delivery. </div>
            </div>
                
            </div>
           </div>
        </div>
    )
}