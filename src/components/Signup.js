import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {signup} from '../services/authService';

const Signup = ({ setAuth }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const [isSignedUp, setIsSignedUp] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await signup(userData);
            const user = JSON.stringify(data.user);
            localStorage.setItem('authToken', user); // Store user details in authToken
            setAuth(user);
            setIsSignedUp(true);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (isSignedUp) {
            navigate('/');
        }
    }, [isSignedUp, navigate]);

    return (
        <div className="auth-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} className="auth-form">
                <label>
                    Username:
                    <input type="text" name="username" value={userData.username} onChange={handleChange} required/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" name="password" value={userData.password} onChange={handleChange} required/>
                </label>
                <br/>
                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>

        </div>
    );
};

export default Signup;
