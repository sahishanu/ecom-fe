import { Movetop } from "@/components/CustomIcons";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar"
import { Product } from "@/components/Proctuctview";
import { Sectionheader } from "@/components/Sectionheader";
import Link from "next/link";
import React from "react"
import {} from "react-icons"
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const productlisting:React.FC<{}>=()=>{

    
    
    return (
        <div>
            <Navbar/>
            <span className="uppercase text-xs px-3  "><Link className="text-blue-700" href={"/"}>home</Link>&gt; Explore Products</span>
            
            <Sectionheader  title={"Explore Products"}/>
            <div>
            <div className="grid grid-cols-4 gap-4  mt-10 w-[85%] mx-auto">
            <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    </div>
                
            </div>
            <Movetop />
            <Footer/>
        </div>
    )
}
export default productlisting;