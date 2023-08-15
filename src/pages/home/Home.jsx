/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Product from "../../component/Product";
// https://fakestoreapi.com/products
const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{

      const fetchProducts= async ()=>{
        const res= await fetch("https://fakestoreapi.com/products");
        const data= await res.json();
        setProducts(data);
      }
      fetchProducts();

    },[])

    return (
        <div>
          <h2 className="text-3xl font-semibold text-center my-4">ALL Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-2">
              {
                products.map(item=><Product item={item} key={item.id}></Product>)
              }
          </div>
        </div>
    );
};

export default Home;