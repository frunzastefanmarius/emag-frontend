import React, {useCallback, useEffect, useState} from 'react';
import {deleteBasket, getBaskets} from '../services/basketService';
import Basket from './Basket';
import {createOrder} from "../services/orderService";
import {getUserById} from "../services/userService";
import {getProductById} from "../services/productService";

const BasketContainer = () => {
    const [baskets, setBaskets] = useState([]);
    const [isBuyer, setIsBuyer] = useState(false);
    const [userId, setUserId] = useState(null);
    const [selectedBaskets, setSelectedBaskets] = useState([]);
    const [userDetails, setUserDetails] = useState({});
    const [productDetails, setProductDetails] = useState({});

    const fetchUserDetails = useCallback((id) => {
        if (!userDetails[id]) {
            getUserById(id).then(user => {
                setUserDetails(prev => ({ ...prev, [id]: user.username }));
            }).catch(console.error);
        }
    }, [userDetails]);

    const fetchProductDetails = useCallback((id) => {
        if (!productDetails[id]) {
            getProductById(id).then(product => {
                setProductDetails(prev => ({ ...prev, [id]: product.name }));
            }).catch(console.error);
        }
    }, [productDetails]);


    useEffect(() => {
        const auth = localStorage.getItem('authToken');
        if (auth) {
            const user = JSON.parse(auth);
            setIsBuyer(user.isBuyer);
            setUserId(user.id);
        }
        loadBaskets();
    }, []);

    useEffect(() => {
        if (baskets.length > 0) {
            baskets.forEach(basket => {
                fetchUserDetails(basket.idUser);
                fetchProductDetails(basket.idProduct);
            });
        }
    }, [baskets, fetchUserDetails, fetchProductDetails]);

    const loadBaskets = () => {
        getBaskets().then(setBaskets).catch(console.error);
    };


    const handleCheckboxChange = (basketId) => {
        setSelectedBaskets((prevSelectedBaskets) =>
            prevSelectedBaskets.includes(basketId)
                ? prevSelectedBaskets.filter((id) => id !== basketId)
                : [...prevSelectedBaskets, basketId]
        );
    };

    const handleCreateOrder = () => {
        const authToken = JSON.parse(localStorage.getItem('authToken'));
        const userId = authToken.id;

        const requests = selectedBaskets.map((basketId) => {
            const basket = baskets.find(b => b.id === basketId);
            return createOrder({
                idUser: userId,
                idProduct: basket.idProduct,
                delivery: true, // or false, based on your requirements
                payment: true,  // or false, based on your requirements
            });
        });
        Promise.all(requests)
            .then(() => {
                alert('Orders created successfully');
                setSelectedBaskets([]);
                loadBaskets(); // Refresh baskets after order creation
            })
            .catch((error) => console.error('Error creating orders:', error));
    };


    const handleDelete = (id) => {
        deleteBasket(id)
            .then(loadBaskets)
            .catch(console.error);
    };

    return <Basket baskets={baskets}
                   onDelete={handleDelete}
                   isBuyer={isBuyer}
                   userId={userId}
                   onCheckboxChange={handleCheckboxChange}
                   selectedBaskets={selectedBaskets}
                   onCreateOrder={handleCreateOrder}
                   userDetails={userDetails}
                   productDetails={productDetails}
    />;
};

export default BasketContainer;
