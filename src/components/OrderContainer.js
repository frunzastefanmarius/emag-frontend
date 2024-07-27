import React, { useEffect, useState } from 'react';
import { getOrders, deleteOrder } from '../services/orderService';
import Order from './Order';

const OrderContainer = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
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

    return <Order orders={orders} onDelete={handleDelete} />;
};

export default OrderContainer;
