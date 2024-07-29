import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ products, onDelete, onCheckboxChange, selectedProducts, onAddToBasket, isBuyer }) => (
    <div>
        <h1>Products</h1>
        {!isBuyer && (
            <Link to="/products/create">
                <button>Create New Product</button>
            </Link>
        )}
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category ID</th>
                <th>Actions</th>
                <th>Select</th>
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
                    <td>
                        {!isBuyer && (
                            <>
                                <button onClick={() => onDelete(product.id)}>Delete</button>
                                <Link to={`/products/update/${product.id}`}>
                                    <button>Update</button>
                                </Link>
                            </>
                        )}
                    </td>
                    <td>
                        <input
                            type="checkbox"
                            checked={selectedProducts.includes(product.id)}
                            onChange={() => onCheckboxChange(product.id)}
                        />
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        <button onClick={onAddToBasket}>Add to Basket</button>
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
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
    onCheckboxChange: PropTypes.func.isRequired,
    selectedProducts: PropTypes.arrayOf(PropTypes.number).isRequired,
    onAddToBasket: PropTypes.func.isRequired,
    isBuyer: PropTypes.bool.isRequired,
};

export default Product;
