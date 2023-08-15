import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {

    const product = useLoaderData();
    console.log(product);

    return (
        <div>
            product id {product.id}
        </div>
    );
};

export default ProductDetails;