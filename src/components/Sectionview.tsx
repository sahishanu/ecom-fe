import Link from "next/link"
import Image from "next/image"
import { Sectionheader } from "./Sectionheader"
import { Product, ProductSmall } from "./Proctuctview"
import { Viewmore } from "./Viewmore"


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
        <ProductSmall url={"./images/productsm/shirt.jpg"} name={"Shirts"}/>
        <ProductSmall url={"./images/productsm/bottom.jpg"} name={"bottoms"}/>
        <ProductSmall url={"./images/productsm/tshirt.jpg"} name={"t-shits"}/>
        <ProductSmall url={"./images/productsm/jacket.jpg"} name={"jackets"}/>
        <ProductSmall url={"./images/productsm/coord.jpg"} name={"co-ords"}/>
        <ProductSmall url={"./images/productsm/sale.png"} name={"on sale"}/>

        </div>
        
    </div>
)
}

export const ExploreProducts=()=>{
    return(<div>
<Sectionheader title={"Explore Products"} subtitle={" Be the first to wear the newest trend"} />
<div className="grid grid-cols-4 gap-4  mt-10 w-[85%] mx-auto">
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    <div className=" ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    <div className=" ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    <div className=" ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    <div className=" ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    <div className="   ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    <div className=" ">
    <Product name={"xyz"} cost={0} imgUrl={"./images/productsm/shirt.jpg"}/>  
    </div>
    </div>
        <div className=" flex justify-center mt-4">
            <Viewmore text={"View all products"} path="productlisting"/>
        </div>
    
    </div>
       
    )
}
    