import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../services/productService';
import Product from './Product';

const ProductContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = () => {
        getProducts().then(setProducts).catch(console.error);
    };

    const handleDelete = (id) => {
        deleteProduct(id)
            .then(loadProducts)
            .catch(console.error);
    };

    return <Product products={products} onDelete={handleDelete} />;
};

export default ProductContainer;
