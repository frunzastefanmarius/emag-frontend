import axios from 'axios';

const API_URL = 'http://localhost:8080/categories';

export const getCategories = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const deleteCategory = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

export const updateCategory = async (id, updatedCategory) => {
    await axios.put(`${API_URL}/${id}`, updatedCategory);
};

export const createCategory = async (newCategory) => {
    await axios.post(API_URL, newCategory);
};
// Additional functions for creating, updating, and deleting categories can go here
