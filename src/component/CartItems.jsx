/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slice/cartSlice';
import Swal from 'sweetalert2';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const CartItems = ({ cart }) => {


    const totalPrice = cart.reduce((accumulator, item) => {
        if (item.rating && item.rating.count) {
            return accumulator + item.rating.count;
        }
        return accumulator;
    }, 0);


    const dispatch = useDispatch();

    const handlePayment =()=>{
        Swal.fire(
            'Payment!',
            'This Feature is Under Development',
            'question'
        )  
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Image</StyledTableCell>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Price</StyledTableCell>
                        <StyledTableCell>Remove</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        cart && cart.map((item, indx) => (
                            <StyledTableRow key={indx}>
                                <StyledTableCell>
                                    <img className="h-24 w-24" src={item.image} alt="" />
                                </StyledTableCell>
                                <StyledTableCell>{item.title}</StyledTableCell>
                                <StyledTableCell>{item.rating?.count}</StyledTableCell>
                                <StyledTableCell>

                                    <Button onClick={() => dispatch(removeFromCart(item.id))}>
                                        <span className='text-2xl text-red-500 font-extrabold'>X</span>
                                    </Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))

                    }
                    <TableRow>
                        <TableCell align="right" colSpan={2}> <span className='font-semibold'>Total:</span> </TableCell>
                        <TableCell ><span className='font-semibold text-red-500'>{totalPrice}</span></TableCell>
                        <TableCell>
                            <Button  onClick={handlePayment} variant="contained">
                                Pay
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>

            </Table>
        </TableContainer>
    );
}

export default CartItems;