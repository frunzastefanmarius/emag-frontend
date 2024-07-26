import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ categories }) => (
    <div>
        <h1>Categories</h1>
        <ul>
            {categories.map(category => (
                <li key={category.id}>
                    {category.name} - {category.description}
                </li>
            ))}
        </ul>
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
};

export default Category;
