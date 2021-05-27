import { Button } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'

export default function CartLayout({
    data,
    deleteCard,
    ...props
}) {
    let productData = data.items
    let totalCost = data.totalPrice
    let productCards
    if (productData.length > 0) {
        productCards = Object.keys(productData).map(key => {
            const data = productData[key]
            return (
                <div key={key} >
                    <h2>
                        {data.name}
                    </h2>
                    <p>{data.price} <Button variant="outlined" color="danger" onClick={()=>deleteCard(data)}>-</Button></p>
                </div>
            )
        })
    } else {
        productCards=(
            <div>
                <h1>No Items Added</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>TotalCost : {totalCost}</h1>
            {productCards}
        </div>
    )
}
