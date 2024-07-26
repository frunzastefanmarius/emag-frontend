import axios from 'axios';

const API_URL = 'http://localhost:8080/products';

export const getProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const deleteProduct = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

// Additional functions for creating, updating, and deleting products can go here
