import { atom, useAtom } from 'jotai';

const initialCart = [
    // {
    //     "id": 1,
    //     "product_id": 1,
    //     "quantity": 10,
    //     "name": "Ellegant Ceramic Cup",
    //     "price": 29.99,
    //     "image": "/images/ceramic_cup.png",
    //     "description": "Ellegant Ceramic Cup"
    // },
    // {
    //     "id": 2,
    //     "product_id": 2,
    //     "quantity": 10,
    //     "name": "Organic Coffee Cup",
    //     "price": 9.99,
    //     "image": "/images/coffee_cup.png",
    //     "description": "Popular coffee cup"
    // },
]

const cartAtom = atom(initialCart);

// useCart is hook
export const useCart = () => {
    const [cart, setCart] = useAtom(cartAtom);

    const getCartTotal = () => {
        let total = 0;
        for (let c of cart) {
            total += c.quantity * c.price;
        }
        return total;
    }

    const addToCart = (product) => {

        // check if the product exist in shopping cart, if exist then increate by 1
        const existingProductIndex = cart.findIndex(cartItem => cartItem.product_id === product.id);

        // if product is not in cart, then index returned is -1
        if (existingProductIndex == -1) {
            const newCartItem = {
                "id": Math.floor(Math.random() * 10000 + 1),
                "product_id": product.id,
                "quantity": 1,
                "name": product.name,
                "price": product.price,
                "image": product.images
            }
            //1. Clone the cart
            //2. modify the clone
            const cloned = [...cart, newCartItem]
            //3. replace the cart in atom
            setCart(cloned);
        } else {
            // find the existing cart item with product id
            const existingCartItem = cart[existingProductIndex];
            // by increasing quantity
            existingCartItem.quantity += 1;
            // clone the cart and modify via "with"
            const cloned = cart.with(existingProductIndex, existingCartItem);
            // replaced the cart in atom
            setCart(cloned);
        }


    }


    return {
        cart, getCartTotal, addToCart
    }
}