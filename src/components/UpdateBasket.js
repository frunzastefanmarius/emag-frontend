import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getBaskets, updateBasket} from '../services/basketService';

const UpdateBasket = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [basket, setBasket] = useState({
        idUser: '',
        idProduct: ''
    });

    useEffect(() => {
        getBaskets().then(baskets => {
            const basketToUpdate = baskets.find(b => b.id === parseInt(id));
            if (basketToUpdate) {
                setBasket(basketToUpdate);
            }
        }).catch(console.error);
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBasket({ ...basket, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBasket(id, basket)
            .then(() => navigate('/baskets'))
            .catch(console.error);
    };

    return (
        <div>
            <h1>Update Basket</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    User ID:
                    <input type="number" name="idUser" value={basket.idUser} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Product ID:
                    <input type="number" name="idProduct" value={basket.idProduct} onChange={handleChange} required />
                </label>
                <br />
                <button type="submit">Update Basket</button>
            </form>
        </div>
    );
};

export default UpdateBasket;
