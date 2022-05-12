import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="home-page">
            <h1>Home</h1>

            <Link to="/product/1">Product 1</Link> 
        </div>
    )
}