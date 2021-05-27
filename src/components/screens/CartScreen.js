import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../store/actions/cartActions'
import CartLayout from '../layouts/CartLayout'

export default function CartScreen() {
    const data = useSelector(state => state.cartItems)
    const dispatch = useDispatch()
    const deleteCard = (product)=>{
        dispatch(removeFromCart(product))
    }
    return (
        <CartLayout data={data} deleteCard={deleteCard}/>
    )
}
