import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProducts, updateProduct } from '../services/productService';

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        id: '',
        name: '',
        description: '',
        price: '',
        idCategory: ''
    });

    useEffect(() => {
        getProducts().then(products => {
            const productToUpdate = products.find(p => p.id === parseInt(id));
            if (productToUpdate) {
                setProduct(productToUpdate);
            }
        }).catch(console.error);
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct(id, product)
            .then(() => navigate('/products'))
            .catch(console.error);
    };

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={product.name} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Description:
                    <input type="text" name="description" value={product.description} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Price:
                    <input type="number" name="price" value={product.price} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Category ID:
                    <input type="number" name="idCategory" value={product.idCategory} onChange={handleChange} required />
                </label>
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateProduct;
