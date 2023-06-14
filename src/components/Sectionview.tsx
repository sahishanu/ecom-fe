import Link from "next/link"
import Image from "next/image"
import { Sectionheader } from "./Sectionheader"
import { Product, ProductSmall } from "./Proctuctview"
import { Viewmore } from "./Viewmore"
import React, { useContext, useEffect, useState } from "react"
import { GetStaticProps } from "next"
import { ProductList, ProductModel } from "@/models/product"
import { ContextData } from "@/contextData/dataContext"


export const StoreunderSection=()=>{
    return (
        <div >
            <Sectionheader title="Grand Style Fest" subtitle="Shop your favorite style at unbeatable prices"/>
            <div className="mt-4 w-[85%]  flex justify-between items-center mx-auto">
                <div className="p-4">
                    <Link href={"/"} >
                    <Image 
                    className=''
                    src="/../public/images/under599.png"
                    width={900}
                    height={150}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Picture of the banner"
    />
                    </Link>
                </div>
                <div className="p-4">
                    <Link href={"/"} >
                    <Image 
                    className=''
                    src="/../public/images/under599.png"
                    width={900}
                    height={150}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Picture of the banner"
    />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export const ExploreCatagorie=()=>{
return (
    <div className=" w-[83%] mx-auto">
        <Sectionheader title={"Explore Products"} subtitle={""}/>
        <div className="flex  mt-5  justify-between ">
        <ProductSmall url={"/images/productsm/shirt.jpg"} name={"Shirts"}/>
        <ProductSmall url={"/images/productsm/bottom.jpg"} name={"bottoms"}/>
        <ProductSmall url={"/images/productsm/tshirt.jpg"} name={"t-shits"}/>
        <ProductSmall url={"/images/productsm/jacket.jpg"} name={"jackets"}/>
        <ProductSmall url={"/images/productsm/coord.jpg"} name={"co-ords"}/>
        <ProductSmall url={"/images/productsm/sale.png"} name={"on sale"}/>

        </div>
        
    </div>
)
}

interface ExploreProductsProps{
    title:string;
    subtitle?:string;
}
export const ExploreProducts:React.FC<ExploreProductsProps>=({title,subtitle})=>{
    // Fetch data from an API or an internal source
    const [data, setData] = useState<ProductModel[] >([]);

    const productsData:ProductModel[]=useContext(ContextData);
    useEffect(()=>{
        
        setData(productsData)
        
    },[productsData]);
    return(<div className="">

        
<Sectionheader title={title} subtitle={subtitle} />
<div className="grid grid-cols-4 gap-4  mt-10 w-[85%] mx-auto">
{data.slice(0,8).map((product) => (
        <div className="" key={product.id}>
            <Product name={product.title} cost={product.price} imgUrl={product.thumbnail} path={"/product/"+product.id}/>  
        </div>
      ))}
    </div>
        <div className=" flex justify-center mt-4">
            <Viewmore text={"View all products"} path="productlisting"  title={"Explore product"}/>
        </div>
    
    </div>
       
    )
}

  
    