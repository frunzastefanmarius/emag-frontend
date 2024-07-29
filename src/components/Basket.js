import React from 'react';
import PropTypes from 'prop-types';

const Basket = ({ baskets, onDelete, isBuyer, userId, onCheckboxChange, selectedBaskets, onCreateOrder, userDetails, productDetails }) => {
    const filteredBaskets = isBuyer ? baskets.filter(basket => basket.idUser === userId) : baskets;

    return (
        <div>
            <h1>Basket</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Product Name</th>
                    {isBuyer && <th>Actions</th>}
                    <th>Select</th>
                </tr>
                </thead>
                <tbody>
                {filteredBaskets.map(basket => (
                    <tr key={basket.id}>
                        <td>{basket.id}</td>
                        <td>{userDetails[basket.idUser]}</td>
                        <td>{productDetails[basket.idProduct]}</td>
                        {isBuyer && (<td>
                            <button onClick={() => onDelete(basket.id)}>Delete</button>
                        </td>)}
                        <td>
                            <input
                                type="checkbox"
                                checked={selectedBaskets.includes(basket.id)}
                                onChange={() => onCheckboxChange(basket.id)}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={onCreateOrder}>Create Order</button>
        </div>
    );
};

Basket.propTypes = {
    baskets: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            idUser: PropTypes.number.isRequired,
            idProduct: PropTypes.number.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
    isBuyer: PropTypes.bool.isRequired,
    userId: PropTypes.number,
    onCheckboxChange: PropTypes.func.isRequired,
    selectedBaskets: PropTypes.arrayOf(PropTypes.number).isRequired,
    onCreateOrder: PropTypes.func.isRequired,
    userDetails: PropTypes.object.isRequired,
    productDetails: PropTypes.object.isRequired,
};

export default Basket;
