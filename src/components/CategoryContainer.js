import React, { useEffect, useState } from 'react';
import { getCategories, deleteCategory } from '../services/categoryService';
import Category from './Category';

const CategoryContainer = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
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

    return <Category categories={categories} onDelete={handleDelete} />;
};

export default CategoryContainer;
