import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ products }) => (
    <div>
        <h1>Products</h1>
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name} - ${product.price}
                </li>
            ))}
        </ul>
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
};

export default Product;
