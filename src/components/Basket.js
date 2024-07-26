import React from 'react';
import PropTypes from 'prop-types';

const Basket = ({ baskets }) => (
    <div>
        <h1>Basket</h1>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Product ID</th>
            </tr>
            </thead>
            <tbody>
            {baskets.map(basket => (
                <tr key={basket.id}>
                    <td>{basket.id}</td>
                    <td>{basket.idUser}</td>
                    <td>{basket.idProduct}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

Basket.propTypes = {
    baskets: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            idUser: PropTypes.number.isRequired,
            idProduct: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Basket;
