import { useSelector } from "react-redux";
import CartItems from "../../component/CartItems";


const Cart = () => {

    const cart = useSelector(state => state.cart);

    return (
        <div>
            {
                cart?.length > 0
                    ?

                    <div className="max-w-4xl mx-auto my-10">
                        <CartItems cart={cart} />
                    </div>

                    :

                    "Please Order Something first"

            }
        </div>
    );
};

export default Cart;