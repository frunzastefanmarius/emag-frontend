import axios from 'axios';

const API_URL = 'http://localhost:8080/orders';

export const getOrders = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const deleteOrder = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

export const updateOrder = async (id, updatedOrder) => {
    await axios.put(`${API_URL}/${id}`, updatedOrder);
};

export const createOrder = async (newOrder) => {
    await axios.post(API_URL, newOrder);
};
// Additional functions for creating, updating, and deleting orders can go here
