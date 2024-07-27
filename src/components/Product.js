import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ products, onDelete }) => (
    <div>
        <h1>Products</h1>
        <Link to="/products/create">
            <button>Create New Product</button>
        </Link>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category ID</th>
                <th>User ID</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {products.map(product => (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>${product.price}</td>
                    <td>{product.idCategory}</td>
                    <td>{product.idUser}</td>
                    <td>
                        <button onClick={() => onDelete(product.id)}>Delete</button>
                        <Link to={`/products/update/${product.id}`}>
                            <button>Update</button>
                        </Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

Product.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            idCategory: PropTypes.number.isRequired,
            idUser: PropTypes.number.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Product;
