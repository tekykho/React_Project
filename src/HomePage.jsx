import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCart } from "./CartStore";

export default function HomePage() {

    const { addToCart} = useCart();

    const [products, setProducts] = useState([])

    // useEffect to fetch data from json file
    useEffect(function () {
        async function fetchData() {
            const response = await axios.get("newProducts.json");
            setProducts(response.data);
        }
        fetchData();
    }, [])

    const productJSX = [];
    for (let p of products) {
        productJSX.push(<div className="col-md-3 mb-4" key={p.id}>
            <ProductCard
                name={p.name}
                price={p.price}
                images={p.images}
                onAddToCart={()=> {
                    addToCart(p);
                    alert("Homepage - added to cart");
                    console.log(p);
                }}
            />
        </div>
        )
    }

    return <>
        <div className="container">
            {/* header */}
            <header className="text-white text-center py-5" style={{ backgroundColor: '#2d2c2a' }}>
                <div className="container">
                    <h1 className="display-4">Welcome to OMO (HANDMADE CRAFTS)</h1>
                    <p className="lead">Objects that speak softly</p>
                    <a href="#" className="btn btn-light btn-lg">Shop Now</a>
                </div>
            </header>

            {/* main  */}
            <main className="container my-5">
                <h2 className="text-center mb-4"><span className="badge bg-danger align-middle me-2 fs-9 blink-badge">NEW</span> Featured Products</h2>
                <div className="row">
                    {productJSX}
                </div>
            </main>
        </div>

    </>
}