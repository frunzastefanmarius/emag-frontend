import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {createProduct} from '../services/productService';

const AddProduct = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        idCategory: '',
        idUser: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(product)
            .then(() => navigate('/products'))
            .catch(console.error);
    };

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" value={product.name} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Description:
                        <input type="text" name="description" value={product.description} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Price:
                        <input type="number" name="price" value={product.price} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Category ID:
                        <input type="number" name="idCategory" value={product.idCategory} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        User ID:
                        <input type="number" name="idUser" value={product.idUser} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <button type="submit">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
