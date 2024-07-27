import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ categories, onDelete }) => (
    <div>
        <h1>Categories</h1>
        <Link to="/categories/create">
            <button>Create New Category</button>
        </Link>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {categories.map(category => (
                <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>{category.description}</td>
                    <td>
                        <button onClick={() => onDelete(category.id)}>Delete</button>
                        <Link to={`/categories/update/${category.id}`}>
                            <button>Update</button>
                        </Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

Category.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Category;
