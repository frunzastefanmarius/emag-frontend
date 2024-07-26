import React from 'react';
import PropTypes from 'prop-types';

const Order = ({ orders }) => (
    <div>
        <h1>Orders</h1>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Creation Date</th>
                <th>Delivery</th>
                <th>Payment</th>
                <th>User ID</th>
                <th>Product ID</th>
            </tr>
            </thead>
            <tbody>
            {orders.map(order => (
                <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.creationDateTime}</td>
                    <td>{order.delivery ? 'Yes' : 'No'}</td>
                    <td>{order.payment ? 'Yes' : 'No'}</td>
                    <td>{order.idUser}</td>
                    <td>{order.idProduct}</td>
                </tr>
            ))}
            </tbody>
        </table>
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
