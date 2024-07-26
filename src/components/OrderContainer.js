import React, { useEffect, useState } from 'react';
import { getOrders } from '../services/orderService';
import Order from './Order';

const OrderContainer = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders().then(setOrders).catch(console.error);
    }, []);

    return <Order orders={orders} />;
};

export default OrderContainer;
