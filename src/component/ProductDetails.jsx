/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useLoaderData } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../redux/slice/cartSlice';

const ProductDetails = () => {

    const product = useLoaderData();

    const dispatch = useDispatch();

    const handleClick = () => {
        console.log("clicked");
    }

    return (
        <div className='max-w-4xl mx-auto my-10'>
            <Card className='md:flex justify-between'>
                <div className="w-full md:w-2/5 md:order-2">
                    <CardMedia
                        component="img"
                        image={product.image}
                        alt="product image"
                        className='w-full object-contain'
                    />
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
                    <div className="flex items-center space-x-2">
                        <span className='font-semibold'>Rating:</span>
                        <span className='text-orange-400'>
                            <StarRateIcon />
                            <StarRateIcon />
                            <StarRateIcon />
                            <StarRateIcon />
                            <StarRateIcon />
                        </span>
                        <span>
                            {product?.rating?.rate}
                        </span>
                    </div>

                    <div>
                        <Button onClick={()=> dispatch(addtoCart(product))} variant="contained">Add To Cart</Button>
                    </div>
                </Box>
            </Card>
        </div>
    );
};

export default ProductDetails;