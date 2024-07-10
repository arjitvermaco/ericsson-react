import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function ProductPage() {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    const apiUrl = `https://fakestoreapi.com/products/${id}`

    async function getProduct() {
        const response = await fetch(apiUrl)
        const data = await response.json()
        setProduct(data)
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div>
            Welcome to product page for product id: {id}

            <h1>{product.title}</h1>
        </div>
    )
}
