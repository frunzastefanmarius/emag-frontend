import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/categoryService';
import Category from './Category';

const CategoryContainer = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(setCategories).catch(console.error);
    }, []);

    return <Category categories={categories} />;
};

export default CategoryContainer;
