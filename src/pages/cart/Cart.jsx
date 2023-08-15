import { useSelector } from "react-redux";
import CartItems from "../../component/CartItems";
import Alert from '@mui/material/Alert';

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

                    <div className="max-w-md mx-auto my-10">
                        <Alert severity="error" color="error">
                            Your Cart Is Empty!
                        </Alert>
                    </div>

            }
        </div>
    );
};

export default Cart;