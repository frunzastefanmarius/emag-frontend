import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getOrders, updateOrder} from '../services/orderService';

const UpdateOrder = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState({
        creationDateTime: '',
        delivery: false,
        payment: false,
        idUser: '',
        idProduct: ''
    });

    useEffect(() => {
        getOrders().then(orders => {
            const orderToUpdate = orders.find(o => o.id === parseInt(id));
            if (orderToUpdate) {
                setOrder(orderToUpdate);
            }
        }).catch(console.error);
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setOrder({ ...order, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateOrder(id, order)
            .then(() => navigate('/orders'))
            .catch(console.error);
    };

    return (
        <div>
            <h1>Update Order</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Creation Date:
                    <input type="text" name="creationDateTime" value={order.creationDateTime} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Delivery:
                    <input type="checkbox" name="delivery" checked={order.delivery} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Payment:
                    <input type="checkbox" name="payment" checked={order.payment} onChange={handleChange} />
                </label>
                <br />
                <label>
                    User ID:
                    <input type="number" name="idUser" value={order.idUser} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Product ID:
                    <input type="number" name="idProduct" value={order.idProduct} onChange={handleChange} required />
                </label>
                <br />
                <button type="submit">Update Order</button>
            </form>
        </div>
    );
};

export default UpdateOrder;
