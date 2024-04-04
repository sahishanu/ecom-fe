import { useContext, useEffect, useState } from "react"
import {ContextData} from "../../contextData/dataContext"
import { ProductModel } from "@/models/product";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import { ProductDetails } from "@/components/ProductDetails";
import Link from "next/link";
import { title } from "process";
import { Footer } from "@/components/Footer";
import BackButton from "@/components/CustomIcons";
import { ExploreProducts } from "@/components/Sectionview";

interface ProductDetailsProps{
    product:ProductModel | undefined;
}
const Productview=()=>{
    
    
    const [product,setProduct]= useState<ProductModel >({
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
    });
    const data:ProductModel[]=useContext(ContextData);
    const router = useRouter();
    const productProp: ProductDetailsProps={
        product:product,
    }
    useEffect(()=>{
        
        
        const { productId } = router.query;
        if (typeof productId === 'string') {
            const item = data.filter((product) => product.id === parseInt(productId));
            setProduct(item[0]);
          }
         
    },[router.query, product,data])



    return (
        
        <div>
        <Navbar/>
        
        <BackButton/>
        <ProductDetails product={product}/>
        <ExploreProducts title={"Similar Products"} />
        <Footer/>
        </div>
    )
}

export default Productview;