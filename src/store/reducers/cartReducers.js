import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";

const initialState = {
    items: [],
    totalPrice: 0,
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const newItems = [...state.items]
            newItems.push({...action.payload})
            console.log("Hello Baby")
            const newTotalPrice = state.totalPrice + action.payload.price
            return {
                ...state,
                items: newItems,
                totalPrice: newTotalPrice
            }

        case REMOVE_FROM_CART:
            const itemData = {...action.payload}
            const modItems = [...state.items]
            const removeIndex = modItems.findIndex(ele => {
                return ele.id === itemData.id
            })
            let removedTotalPrice = state.totalPrice - itemData.price
            removedTotalPrice = parseFloat(removedTotalPrice.toFixed(2))
            modItems.splice(removeIndex, 1)
            return {
                ...state,
                items: modItems,
                totalPrice: removedTotalPrice
            }
        default:
            return {
                ...state
            }
    }
}