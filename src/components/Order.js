import React from 'react';
import PropTypes from 'prop-types';

const Order = ({ orders }) => (
    <div>
        <h1>Orders</h1>
        <ul>
            {orders.map(order => (
                <li key={order.id}>
                    {`Order ID: ${order.id}, User ID: ${order.idUser}, Product ID: ${order.idProduct}, Delivery: ${order.delivery}, Payment: ${order.payment}`}
                </li>
            ))}
        </ul>
    </div>
);

Order.propTypes = {
    orders: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            creationDateTime: PropTypes.string.isRequired,
            delivery: PropTypes.bool.isRequired,
            payment: PropTypes.bool.isRequired,
            idUser: PropTypes.number.isRequired,
            idProduct: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Order;
