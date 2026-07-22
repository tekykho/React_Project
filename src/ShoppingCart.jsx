import { useCart } from "./CartStore";

export default function ShoppingCart() {
    const { cart, getCartTotal, removeFromCart, modifyQuantity } = useCart();

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Shopping Cart</h2>

            {/* Main Cart Table Card */}
            <div className="card shadow-sm mb-4">
                <div className="table-responsive">
                    <table className="table align-middle mb-0">
                        {/* Table Header Section */}
                        <thead className="table-light">
                            <tr>
                                <th scope="col" style={{ width: "50px" }} className="text-center">
                                    <input type="checkbox" className="form-check-input" />
                                </th>
                                <th scope="col">Product</th>
                                <th scope="col" className="text-center">Price</th>
                                <th scope="col" className="text-center">Quantity</th>
                                <th scope="col" className="text-center">Subtotal</th>
                                <th scope="col" className="text-center">Action</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {cart.length > 0 ? (
                                cart.map(item => (
                                    <tr key={item.id}>
                                        {/* Checkbox */}
                                        <td className="text-center">
                                            <input type="checkbox" className="form-check-input" />
                                        </td>

                                        {/* Product (Image + Name) */}
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="img-thumbnail me-3"
                                                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                                />
                                                <div>
                                                    <h6 className="mb-0 fw-bold">{item.name}</h6>
                                                    <small className="text-muted">Item NO.: {item.product_id || item.id}</small>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Unit Price */}
                                        <td className="text-center">
                                            ${Number(item.price).toFixed(2)}
                                        </td>

                                        {/* Quantity Input Group */}
                                        <td className="text-center">
                                            <div className="input-group input-group-sm justify-content-center mx-auto" style={{ maxWidth: "120px" }}>
                                                {/* Minus Button */}
                                                <button
                                                    className="btn btn-outline-secondary px-2"
                                                    type="button"
                                                    onClick={() => modifyQuantity(item, item.quantity - 1)}
                                                    disabled={item.quantity <= 1}
                                                >
                                                    -
                                                </button>

                                                {/* Quantity Display */}
                                                <span className="input-group-text bg-white px-3 fw-bold">
                                                    {item.quantity}
                                                </span>

                                                {/* Plus Button */}
                                                <button
                                                    className="btn btn-outline-secondary px-2"
                                                    type="button"
                                                    onClick={() => modifyQuantity(item, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>

                                        {/* Subtotal */}
                                        <td className="text-center fw-bold">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </td>

                                        {/* Action (Delete Icon + Text) */}
                                        <td className="text-center">
                                            <button
                                                className="btn btn-link text-danger text-decoration-none p-0 border-0"
                                                onClick={() => removeFromCart(item)}
                                            >
                                                <i className="bi bi-trash me-1"></i>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center py-4 text-muted">
                                        Your cart is currently empty.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Bottom Checkout Footer Bar */}
            <div className="card shadow-sm p-3 d-flex flex-row justify-content-between align-items-center mb-3">
                <div>
                    <input type="checkbox" className="form-check-input me-2" id="clearAll" />
                    <label htmlFor="clearAll" className="form-check-label me-3">Select All</label>
                </div>
                <div className="d-flex align-items-center">
                    <span className="me-3 text-muted">
                        {/*  acc = accumulator, curr = current, 0 = initial value */}
                        {cart.reduce((acc, curr) => acc + curr.quantity, 0)} products selected
                    </span>
                    <span className="fs-5 me-3">
                        Total: <strong className="text-danger fs-4">${getCartTotal().toFixed(2)}</strong>
                    </span>
                    <button className="btn btn-danger btn-lg px-4">
                        Check out
                    </button>
                </div>
            </div>
        </div>
    );
}

