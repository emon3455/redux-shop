/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useLoaderData } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Button, Rating } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../redux/slice/cartSlice';

const ProductDetails = () => {

    const product = useLoaderData();

    const dispatch = useDispatch();


    return (
        <div className='max-w-4xl mx-auto my-10'>
            <Card className='md:flex justify-between items-center'>
                <div className="w-full md:w-2/5 md:order-2">
                    <img src={product.image} alt="product image" className='h-60 w-60 mx-auto' />
                </div>
                <Box className="w-full md:w-3/5 md:order-1  flex flex-col justify-center p-2 space-y-2">
                    <Typography variant="h6" component="div">
                        {product?.title}
                    </Typography>
                    <Typography variant="p" component="div">
                        <span className='font-semibold'>Category:</span> {product?.category}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        <span className='font-semibold'>Description:</span> {product?.description}
                    </Typography>
                    <Typography gutterBottom component="div">
                        <span className='font-semibold'>Price:</span> <span className='font-semibold text-orange-500'>{product?.rating?.count}</span>
                    </Typography>
                    <div className="flex items-center space-x-2">
                        <span className='font-semibold'>Rating:</span>
                        <Rating
                            name="readOnly"
                            value={product?.rating?.rate}
                            readOnly
                        />
                        <span>
                            {product?.rating?.rate}
                        </span>
                    </div>

                    <div>
                        <Button onClick={() => dispatch(addtoCart(product))} variant="contained">Add To Cart</Button>
                    </div>
                </Box>
            </Card>
        </div>
    );
};

export default ProductDetails;