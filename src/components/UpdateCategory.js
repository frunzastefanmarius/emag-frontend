import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getCategories, updateCategory} from '../services/categoryService';

const UpdateCategory = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [category, setCategory] = useState({
        name: '',
        description: '',
    });

    useEffect(() => {
        getCategories().then(categories => {
            const categoryToUpdate = categories.find(c => c.id === parseInt(id));
            if (categoryToUpdate) {
                setCategory(categoryToUpdate);
            }
        }).catch(console.error);
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory({ ...category, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateCategory(id, category)
            .then(() => navigate('/categories'))
            .catch(console.error);
    };

    return (
        <div>
            <h1>Update Category</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={category.name} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Description:
                    <input type="text" name="description" value={category.description} onChange={handleChange} required />
                </label>
                <br />
                <button type="submit">Update Category</button>
            </form>
        </div>
    );
};

export default UpdateCategory;
