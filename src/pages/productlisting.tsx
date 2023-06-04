import Navbar from "@/components/Navbar"
import { Product } from "@/components/Proctuctview";
import React from "react"

const productlisting:React.FC<{}>=()=>{

    
    
    return (
        <div>
            <Navbar/>
            <div >
                Explore Products
            </div>
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
    </div>
                
            </div>
        </div>
    )
}
export default productlisting;