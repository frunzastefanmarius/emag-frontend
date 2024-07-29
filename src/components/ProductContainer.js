import React, {useEffect, useState} from 'react';
import {deleteProduct, getProducts} from '../services/productService';
import {createBasket} from '../services/basketService'; // Import the basket service
import Product from './Product';

const ProductContainer = () => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);

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

    const handleCheckboxChange = (productId) => {
        setSelectedProducts((prevSelectedProducts) =>
            prevSelectedProducts.includes(productId)
                ? prevSelectedProducts.filter((id) => id !== productId)
                : [...prevSelectedProducts, productId]
        );
    };

    const handleAddToBasket = () => {
        const authToken = localStorage.getItem('authToken');

        const requests = selectedProducts.map((productId) =>
            createBasket(parseInt(authToken, 10), productId)
        );

        Promise.all(requests)
            .then(() => {
                alert('Products added to basket successfully');
                setSelectedProducts([]);
            })
            .catch((error) => console.error('Error adding products to basket:', error));
    };


    return (
        <Product
            products={products}
            onDelete={handleDelete}
            onCheckboxChange={handleCheckboxChange}
            selectedProducts={selectedProducts}
            onAddToBasket={handleAddToBasket}
        />
    );
};

export default ProductContainer;
