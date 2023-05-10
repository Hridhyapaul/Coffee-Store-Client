import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";

const Products = () => {
    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts)
    console.log(products)
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-8">Our Popular Products</h1>
            <div className="grid grid-cols-2 gap-8">
                {
                    products.map(coffee => <ProductCard 
                        key={coffee._id} 
                        coffee={coffee}
                        setProducts={setProducts}
                        products={products}
                        ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;