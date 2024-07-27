import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {createBasket} from '../services/basketService';

const AddBasket = () => {
    const navigate = useNavigate();
    const [basket, setBasket] = useState({
        idUser: '',
        idProduct: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBasket({ ...basket, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createBasket(basket)
            .then(() => navigate('/baskets'))
            .catch(console.error);
    };

    return (
        <div>
            <h1>Add Basket</h1>
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
                <button type="submit">Add Basket</button>
            </form>
        </div>
    );
};

export default AddBasket;
