import ProductCard from "./ProductCard"
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductPage() {

     const [products, setProducts] = useState([])
    
     useEffect(function() {
        async function fetchData() {
            const response = await axios.get("products.json");
            setProducts(response.data);
        }
        fetchData();
     }, [])

    return <>
        <div className="container my-5">
            <h1 className="text-center">Full Products</h1>
            <div className="row">
                {
                    products.map(function (p) {
                        return (

                            <div key={p.id} className="col-md-3 mb-4" key={p.id}>
                                <ProductCard
                                    name={p.name}
                                    price={p.price}
                                    images={p.images}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>

    </>
}