import ProductCard from "./ProductCard"
import axios from "axios";
import { useEffect, useState } from "react";
import { useCart } from "./CartStore";
import { useFlashMessage} from "./FlashMsgStore";

export default function ProductPage() {
    const { addToCart } = useCart();
    const { showMessage } = useFlashMessage();

    const [products, setProducts] = useState([])

    useEffect(function () {
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

                            <div className="col-md-3 mb-4" key={p.id}>
                                <ProductCard
                                    name={p.name}
                                    price={p.price}
                                    images={p.images}
                                    onAddToCart={() => {
                                        addToCart(p);
                                        showMessage("Product added to Cart", "success");
                                        // alert("added to cart");
                                        // console.log(p);
                                    }}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>

    </>
}