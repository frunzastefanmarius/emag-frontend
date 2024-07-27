import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Basket = ({ baskets, onDelete }) => (
    <div>
        <h1>Basket</h1>
        <Link to="/baskets/create">
            <button>Create New Basket</button>
        </Link>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Product ID</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {baskets.map(basket => (
                <tr key={basket.id}>
                    <td>{basket.id}</td>
                    <td>{basket.idUser}</td>
                    <td>{basket.idProduct}</td>
                    <td>
                        <button onClick={() => onDelete(basket.id)}>Delete</button>
                        <Link to={`/baskets/update/${basket.id}`}>
                            <button>Update</button>
                        </Link>
                    </td>
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
    onDelete: PropTypes.func.isRequired,
};

export default Basket;
