/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

function Product({ item }) {
    return (
        <Card className='flex justify-between flex-col'>
            <div className='w-full'>
                <img src={item.image} alt="product image" className='h-44 w-44 mx-auto' />
            </div>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                </Typography>
                <Typography gutterBottom  component="div">
                    <span className='font-semibold'>Price:</span> <span className='font-semibold text-orange-500'>{item?.rating?.count}</span>
                </Typography>
            </CardContent>
            <div className="p-2 text-center">
                <Button className='' size="small" variant="contained">
                    <Link to={`/products/${item.id}`} style={{ textDecoration: 'none', color: "inherit" }} >Details</Link>
                </Button>
            </div>
        </Card>
    );
}

export default Product;
