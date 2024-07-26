import React from 'react';
import PropTypes from 'prop-types';

const Basket = ({ baskets }) => (
    <div>
        <h1>Basket</h1>
        <ul>
            {baskets.map(basket => (
                <li key={basket.id}>
                    {`User ID: ${basket.idUser}, Product ID: ${basket.idProduct}`}
                </li>
            ))}
        </ul>
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
