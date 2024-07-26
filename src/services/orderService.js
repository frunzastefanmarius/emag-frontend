import axios from 'axios';

const API_URL = 'http://localhost:8080/orders';

export const getOrders = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Additional functions for creating, updating, and deleting orders can go here
