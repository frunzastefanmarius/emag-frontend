import axios from 'axios';

const API_URL = 'http://localhost:8080/basket';

export const getBaskets = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};


export const deleteBasket = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

export const updateBasket = async (id, updatedBasket) => {
    await axios.put(`${API_URL}/${id}`, updatedBasket);
};

// export const createBasket = async (newBasket) => {
//     await axios.post(API_URL, newBasket);
// };

export const createBasket = (userId, productId) => {
    return axios.post(`${API_URL}`, {
        idUser: userId,
        idProduct: productId,
    });
};

// Additional functions for creating, updating, and deleting baskets can go here
