import axios from 'axios';

const API_URL = 'http://localhost:8080/baskets';

export const getBaskets = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Additional functions for creating, updating, and deleting baskets can go here
