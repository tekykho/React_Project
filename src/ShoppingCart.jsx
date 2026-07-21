import { useCart } from "./CartStore";

export default function ShoppingCart() {

    const { cart, getCartTotal } = useCart();

    return <>
        <div className="container mt-4">
            <h2 className="mb-4">Shopping Cart</h2>
            <ul className="list-group mb-4">
                {
                    cart.map(item => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center py-3">
                            <div className="d-flex align-items-center">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="img-thumbnail me-3"
                                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                />
                                <div>
                                    <h5 className="mb-1">{item.name}</h5>
                                    <p className="text-muted mb-0 small">Quantity: {item.quantity}</p>
                                </div>
                            </div>
                            <div className="fw-bold fs-5">
                                ${(item.price * item.quantity).toFixed(2)}
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className="text-end">
                <h3>Total: ${getCartTotal().toFixed(2)}</h3>
            </div>
        </div>

    </>
}