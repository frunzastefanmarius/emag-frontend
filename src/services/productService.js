import axios from 'axios';

const API_URL = 'http://localhost:8080/products';

export const getProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const deleteProduct = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

export const updateProduct = async (id, updatedProduct) => {
    await axios.put(`${API_URL}/${id}`, updatedProduct);
};

export const createProduct = async (newProduct) => {
    await axios.post(API_URL, newProduct);
};
// Additional functions for creating, updating, and deleting products can go here
