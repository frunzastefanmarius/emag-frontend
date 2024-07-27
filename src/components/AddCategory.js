import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {createCategory} from '../services/categoryService';

const AddCategory = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState({
        name: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory({ ...category, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createCategory(category)
            .then(() => navigate('/categories'))
            .catch(console.error);
    };

    return (
        <div>
            <h1>Add Category</h1>
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
                <button type="submit">Add Category</button>
            </form>
        </div>
    );
};

export default AddCategory;
