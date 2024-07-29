import React, { useEffect, useState } from 'react';
import { getOrders, deleteOrder } from '../services/orderService';
import Order from './Order';

const OrderContainer = () => {
    const [orders, setOrders] = useState([]);
    const [isBuyer, setIsBuyer] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem('authToken');
        if (auth) {
            const user = JSON.parse(auth);
            setIsBuyer(user.isBuyer);
        }
        loadOrders();
    }, []);

    const loadOrders = () => {
        getOrders().then(setOrders).catch(console.error);
    };

    const handleDelete = (id) => {
        deleteOrder(id)
            .then(loadOrders)
            .catch(console.error);
    };

    return <Order orders={orders} onDelete={handleDelete} isBuyer={isBuyer} />;
};

export default OrderContainer;
