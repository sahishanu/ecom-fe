import { ProductModel } from "@/models/product"


interface ProductDetailsProps{
    product:ProductModel |undefined;
}
export const ProductDetails:React.FC<ProductDetailsProps>=({product})=>{
    let data:ProductModel={
        id: 0,
        title: "",
        description: "",
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: "",
        category: "",
        thumbnail: "",
        images: []
    };
    if(product!=undefined){
    data=product;
}

    return (
        <div>
            {
                data.title
            }
        </div>
    )
}