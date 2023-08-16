/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Product from "../../component/Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProdutcs } from "../../redux/slice/productsSlice";
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const Shop = () => {

  // using redux toolkit
  const { isLoading, products, error } = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProdutcs());
  }, [dispatch])


  return (
    <div className="p-2">
      {
        isLoading && <div className="max-w-xl mx-auto my-10 text-center">
          <CircularProgress disableShrink />;
        </div>
      }
      {
        error && <div className="max-w-md mx-auto my-10">
          <Alert severity="error" color="error">
            {error}
          </Alert>
        </div>
      }
      {
        products && <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-2">
          {
            products.map(item => <Product item={item} key={item.id}></Product>)
          }
        </div>
      }

    </div>
  );
};

export default Shop;