import React, { useEffect, useState } from 'react';
import { getBaskets, deleteBasket } from '../services/basketService';
import Basket from './Basket';

const BasketContainer = () => {
    const [baskets, setBaskets] = useState([]);

    useEffect(() => {
        loadBaskets();
    }, []);

    const loadBaskets = () => {
        getBaskets().then(setBaskets).catch(console.error);
    };

    const handleDelete = (id) => {
        deleteBasket(id)
            .then(loadBaskets)
            .catch(console.error);
    };

    return <Basket baskets={baskets} onDelete={handleDelete} />;
};

export default BasketContainer;
