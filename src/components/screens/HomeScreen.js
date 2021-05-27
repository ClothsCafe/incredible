import React from 'react'
import { useDispatch } from 'react-redux'
import { productData } from '../../assets/data/dummyData'
import { addToCart } from '../../store/actions/cartActions'
import HomeLayout from '../layouts/HomeLayout'



export default function HomeScreen(props) {
    const dispatch=useDispatch()
    const cartAddHandler = (product)=>{
        dispatch(addToCart(product))
    }
    return (
        <HomeLayout products={productData} onAddClick={cartAddHandler}/>
    )
}
