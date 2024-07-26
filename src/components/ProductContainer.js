import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/productService';
import Product from './Product';

const ProductContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts).catch(console.error);
    }, []);

    return <Product products={products} />;
};

export default ProductContainer;
