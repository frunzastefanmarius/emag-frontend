import React, { useEffect, useState } from 'react';
import { getCategories, deleteCategory } from '../services/categoryService';
import Category from './Category';

const CategoryContainer = () => {
    const [categories, setCategories] = useState([]);
    const [isBuyer, setIsBuyer] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem('authToken');
        if (auth) {
            const user = JSON.parse(auth);
            setIsBuyer(user.isBuyer);
        }
        loadCategories();
    }, []);

    const loadCategories = () => {
        getCategories().then(setCategories).catch(console.error);
    };

    const handleDelete = (id) => {
        deleteCategory(id)
            .then(loadCategories)
            .catch(console.error);
    };

    return <Category categories={categories} onDelete={handleDelete} isBuyer={isBuyer} />;
};

export default CategoryContainer;
