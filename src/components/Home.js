import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <h1>Home</h1>
        <ul>
            <li><Link to="/products">Show Products</Link></li>
            <li><Link to="/baskets">Show Basket</Link></li>
            <li><Link to="/orders">Show Orders</Link></li>
            <li><Link to="/categories">Show Categories</Link></li>
        </ul>
    </div>
);

export default Home;
