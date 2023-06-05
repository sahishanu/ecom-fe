import { Movetop } from "@/components/CustomIcons";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar"
import { Product } from "@/components/Proctuctview";
import { Sectionheader } from "@/components/Sectionheader";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react"
import {} from "react-icons"
import { BsFillArrowUpCircleFill } from "react-icons/bs";

interface Props{
    title:string;
    subtitle?:string;
}

const productlisting:React.FC<{}>=()=>{

    const router =useRouter();
    const title =router.query.title as string;
    console.log(router.query);
    return (
        <div>
            <Navbar/>
            <span className="uppercase text-xs px-3  "><Link className="text-blue-700" href={"/"}>home</Link>&gt; Explore Products</span>
            
            <Sectionheader  title={title}/>
            <div>
            <div className="grid grid-cols-4 gap-4  mt-10 w-[85%] mx-auto">
            <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"} path={"/productdetails"}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"} path={""}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"} path={""}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"} path={""}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"} path={""}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"} path={""}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"} path={""}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"} path={""}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"} path={""}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"} path={""}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"} path={""}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"} path={""}/>  
    </div>
    </div>
                
            </div>
            <Movetop />
            <Footer/>
        </div>
    )
}
export default productlisting;