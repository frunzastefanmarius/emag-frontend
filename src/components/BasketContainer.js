import React, { useEffect, useState } from 'react';
import { getBaskets } from '../services/basketService';
import Basket from './Basket';

const BasketContainer = () => {
    const [baskets, setBaskets] = useState([]);

    useEffect(() => {
        getBaskets().then(setBaskets).catch(console.error);
    }, []);

    return <Basket baskets={baskets} />;
};

export default BasketContainer;
