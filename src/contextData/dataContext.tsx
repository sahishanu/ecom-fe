import { ProductModel } from "@/models/product";
import { createContext, useEffect, useState } from "react"
interface ChildProps {
    children: React.ReactNode;
  }
export const ContextData= createContext<ProductModel[]>([]);
async function getData() {
    const res = await fetch('/data/allProduct.json');
    
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
  }
export const DataProvider:React.FC<ChildProps>=({children})=>{
    const [data,setData]= useState<ProductModel[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          const products_data = await getData();
          const prod= products_data["products"]
          const products: ProductModel[] = prod.map((product: any) => ({
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            discountPercentage: product.discountPercentage,
            rating: product.rating,
            stock: product.stock,
            brand: product.brand,
            category: product.category,
            thumbnail: product.thumbnail,
            images: product.images,
          }));
         setData(products);
        };
    
        fetchData();
      },[]);

    
    return(
        <ContextData.Provider value={data}>
            {children}
        </ContextData.Provider>
    ) 
}