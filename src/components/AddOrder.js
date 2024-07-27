import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {createOrder} from '../services/orderService';

const AddOrder = () => {
    const navigate = useNavigate();
    const [order, setOrder] = useState({
        creationDateTime: '',
        delivery: false,
        payment: false,
        idUser: '',
        idProduct: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setOrder({ ...order, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createOrder(order)
            .then(() => navigate('/orders'))
            .catch(console.error);
    };

    return (
        <div>
            <h1>Add Order</h1>
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
                <button type="submit">Add Order</button>
            </form>
        </div>
    );
};

export default AddOrder;
