import { Button } from '@material-ui/core'
import React from 'react'

export default function HomeLayout({
    products,
    onAddClick,
    ...props}) {
    const productCards = Object.keys(products).map(key=>{
        const data=products[key]
        return(
            <div key={key} >
                <h2>
                    {data.name}
                </h2>
                <p>{data.price} <Button variant="outlined" color="primary" onClick={()=>onAddClick(data)}>+</Button></p>
            </div>
        )
    })
    return (
        <div>
            {productCards}
        </div>
    )
}
