import axios from 'axios';

const API_URL = 'http://localhost:8080/users';

export const getUsers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

export const updateUser = async (id, updatedUser) => {
    await axios.put(`${API_URL}/${id}`, updatedUser);
};

export const createUser = async (newUser) => {
    await axios.post(API_URL, newUser);
};

export const getUserById = (id) => {
    return axios.get(`${API_URL}/${id}`).then(response => response.data);
};

// Additional functions for creating, updating, and deleting users can go here
