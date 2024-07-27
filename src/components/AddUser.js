import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {createUser} from '../services/userService';

const AddUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        password: '',
        isActive: false,
        isBuyer: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUser({ ...user, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(user)
            .then(() => navigate('/users'))
            .catch(console.error);
    };

    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={user.username} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={user.password} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Active:
                    <input type="checkbox" name="isActive" checked={user.isActive} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Buyer:
                    <input type="checkbox" name="isBuyer" checked={user.isBuyer} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;