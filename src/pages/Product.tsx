import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProduct } from '../context'

export const Product = () => {
    let { id } = useParams();
    const { } = useProduct();

    return (
        <div className="product-page">
            <h1>Product {id}</h1>

            <Link to="/">Home</Link> 
        </div>
    )
}