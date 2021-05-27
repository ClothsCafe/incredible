import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";

export const addToCart = (payload)=>{
    console.log(payload)
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const removeFromCart = (payload)=>{
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}