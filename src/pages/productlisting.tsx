import { Movetop } from "@/components/CustomIcons";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar"
import { Product } from "@/components/Proctuctview";
import { Sectionheader } from "@/components/Sectionheader";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react"
import {} from "react-icons"
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import{ProductList,ProductModel} from "../models/product";
import { ContextData } from "@/contextData/dataContext";
interface Props{
    title:string;
    subtitle?:string;
}

const Productlisting:React.FC<{}>=()=>{

    const router =useRouter();
    const title =router.query.title as string;
    console.log(router.query);
    const [data,setdata] =useState<ProductModel[]>([]);
    const productsData:ProductModel[]= useContext(ContextData);
    useEffect(()=>{
        setdata(productsData);
    },[productsData])
    return (
        <div>
            <Navbar/>
            <span className="uppercase text-xs px-3  "><Link className="text-blue-700" href={"/"}>home</Link>&gt; {title}</span>
            
            <Sectionheader  title={title}/>
            <div>
            <div className="grid grid-cols-4 gap-4  mt-10 w-[85%] mx-auto">
            {data.map((product) => (
        <div className="" key={product.id}>
            <Product name={product.title} cost={product.price} imgUrl={product.thumbnail} path={"/product/"+product.id}/>  
        </div>
      ))}
   
    </div>
                
            </div>
            <Movetop />
            <Footer/>
        </div>
    )
}
export default Productlisting;