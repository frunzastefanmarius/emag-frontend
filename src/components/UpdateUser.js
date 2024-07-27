import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getUsers, updateUser} from '../services/userService';

const UpdateUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        id: '',
        username: '',
        password: '',
        isActive: false,
        isBuyer: false,
    });

    useEffect(() => {
        getUsers().then(users => {
            const userToUpdate = users.find(u => u.id === parseInt(id));
            if (userToUpdate) {
                setUser(userToUpdate);
            }
        }).catch(console.error);
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUser({ ...user, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(id, user)
            .then(() => navigate('/users'))
            .catch(console.error);
    };

    return (
        <div>
            <h1>Update User</h1>
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
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default UpdateUser;
