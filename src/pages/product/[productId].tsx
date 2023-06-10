import { useContext, useEffect, useState } from "react"
import {ContextData} from "../../contextData/dataContext"
import { ProductModel } from "@/models/product";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import { ProductDetails } from "@/components/ProductDetails";

interface ProductDetailsProps{
    product:ProductModel | undefined;
}
const productdetails=()=>{
    
    
    const [product,setProduct]= useState<ProductModel >();
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
          console.log(product);
    })



    return (
        
        <div>
        <Navbar/>

        <ProductDetails product={product}/>

        </div>
    )
}

export default productdetails;